// =============================================
// SECTION SORT GAME — game.js
// scenario5-grocery/section-game/
// =============================================

// ---- Game State ----
let currentLevel = 'easy';
let items = [];
let correctCount = 0;
let mistakeCount = 0;
let totalItems = 0;
let timerInterval = null;
let secondsElapsed = 0;
let gameStarted = false;
let selectedItem = null;
let streak = 0;
let bestStreak = 0;

// =============================================
// INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  setupDifficultyButtons();
  setupControlButtons();
  initGame();
});

function setupDifficultyButtons() {
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.dataset.level;

      // Update description
      const descEl = document.getElementById('diffDescription');
      if (descEl && LEVEL_CONFIG[currentLevel]) {
        descEl.textContent = LEVEL_CONFIG[currentLevel].description;
      }

      resetGame();
    });
  });
}

function setupControlButtons() {
  document.getElementById('btnHint').addEventListener('click', showHint);
  document.getElementById('btnReset').addEventListener('click', resetGame);
  document.getElementById('btnCheck').addEventListener('click', checkAll);
}

function initGame() {
  correctCount = 0;
  mistakeCount = 0;
  secondsElapsed = 0;
  gameStarted = false;
  selectedItem = null;
  streak = 0;
  bestStreak = 0;
  clearInterval(timerInterval);

  const count = LEVEL_CONFIG[currentLevel];
  items = selectItems(count);
  totalItems = items.length;

  renderSections();
  renderTrayItems();
  updateScoreboard();
  updateProgress();

  document.getElementById('hintPanel').classList.remove('show');
  document.getElementById('completeModal').classList.remove('show');
  document.getElementById('timerDisplay').textContent = '0:00';
  document.getElementById('trayEmpty').style.display = 'none';
  document.getElementById('learningSummary').style.display = 'none';
}

// =============================================
// ITEM SELECTION
// =============================================

function selectItems(count) {
  const shuffled = [...ALL_ITEMS].sort(() => Math.random() - 0.5);
  const selected = [];
  const usedSections = new Set();

  // Guarantee at least 1 from each section
  for (const item of shuffled) {
    if (!usedSections.has(item.section) && selected.length < SECTIONS.length) {
      selected.push({ ...item, id: `item-${selected.length}` });
      usedSections.add(item.section);
    }
    if (usedSections.size === SECTIONS.length) break;
  }

  // Fill remaining
  for (const item of shuffled) {
    if (selected.length >= count) break;
    if (!selected.find(s => s.name === item.name)) {
      selected.push({ ...item, id: `item-${selected.length}` });
    }
  }

  return selected.sort(() => Math.random() - 0.5);
}

// =============================================
// RENDERING
// =============================================

function renderSections() {
  const grid = document.getElementById('sectionsGrid');
  grid.innerHTML = SECTIONS.map(sec => {
    const sectionItemCount = items.filter(i => i.section === sec.id).length;
    return `
      <div class="section-zone" id="zone-${sec.id}"
           data-section="${sec.id}"
           ondragover="handleDragOver(event)"
           ondragleave="handleDragLeave(event)"
           ondrop="handleDrop(event)">
        <div class="section-header">
          <div class="section-icon" style="background: ${sec.color};">${sec.icon}</div>
          <div>
            <h4>${sec.name}</h4>
            <div class="section-hint">${sec.hint}</div>
          </div>
          <div class="section-count" id="count-${sec.id}">0/${sectionItemCount}</div>
        </div>
        <div class="section-drop-area" id="drop-${sec.id}" data-section="${sec.id}">
          <div class="drop-placeholder">Drop items here</div>
        </div>
      </div>`;
  }).join('');

  // Tap-to-place: click a zone to place the selected item
  document.querySelectorAll('.section-zone').forEach(zone => {
    zone.addEventListener('click', () => {
      if (selectedItem) {
        placeItem(selectedItem, zone.dataset.section);
        selectedItem = null;
        clearSelection();
      }
    });
  });
}

function renderTrayItems() {
  const tray = document.getElementById('itemTray');
  tray.innerHTML = items.map(item => `
    <div class="grocery-item" id="${item.id}"
         draggable="true"
         data-section="${item.section}"
         data-name="${item.name}"
         ondragstart="handleDragStart(event)"
         ondragend="handleDragEnd(event)"
         onclick="handleItemTap('${item.id}')">
      <span class="item-emoji">${item.emoji}</span>
      <span>${item.name}</span>
    </div>
  `).join('');
}

// =============================================
// DRAG & DROP
// =============================================

function handleDragStart(e) {
  startTimerIfNeeded();
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.section-zone').forEach(z => z.classList.remove('drag-over'));
}

function handleDragOver(e) {
  e.preventDefault();
  const zone = e.target.closest('.section-zone');
  if (zone) zone.classList.add('drag-over');
}

function handleDragLeave(e) {
  const zone = e.target.closest('.section-zone');
  if (zone) zone.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  const zone = e.target.closest('.section-zone');
  if (!zone) return;
  zone.classList.remove('drag-over');

  const itemId = e.dataTransfer.getData('text/plain');
  placeItem(itemId, zone.dataset.section);
}

// =============================================
// TAP-TO-PLACE (mobile)
// =============================================

function handleItemTap(itemId) {
  startTimerIfNeeded();
  const el = document.getElementById(itemId);
  if (!el || el.classList.contains('correct')) return;

  clearSelection();
  selectedItem = itemId;
  el.classList.add('selected');
}

function clearSelection() {
  document.querySelectorAll('.grocery-item').forEach(g => g.classList.remove('selected'));
}

// =============================================
// CORE LOGIC — Place an item
// =============================================

function placeItem(itemId, targetSection) {
  const el = document.getElementById(itemId);
  if (!el || el.classList.contains('correct')) return;

  startTimerIfNeeded();

  const correctSection = el.dataset.section;
  const dropArea = document.getElementById(`drop-${targetSection}`);

  // Remove placeholder
  const placeholder = dropArea.querySelector('.drop-placeholder');
  if (placeholder) placeholder.remove();

 if (correctSection === targetSection) {
    // ✅ CORRECT
    correctCount++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;

    el.classList.add('correct');
    el.classList.remove('wrong', 'selected');
    el.draggable = false;
    dropArea.appendChild(el);

    // Find the item data for Aussie vocab
    const itemData = items.find(i => i.id === itemId);
    const secName = getSectionName(targetSection);
    
    let msg = `✅ ${el.dataset.name} → ${secName}`;
    
    // Show Aussie vocab tip sometimes
    if (itemData && itemData.aussieVocab && Math.random() > 0.3) {
      msg = `✅ ${el.dataset.name} → ${secName} | 🇦🇺 ${itemData.aussieVocab}`;
    } else if (streak >= 5) {
      msg += ` 🔥 Streak: ${streak}!`;
    } else if (streak >= 3) {
      msg += ` 🔥 ${streak} in a row!`;
    }
    
    showToast(msg, 'success');

    updateSectionCount(targetSection);
    updateScoreboard();
    updateProgress();
    checkTrayEmpty();

    if (correctCount === totalItems) {
      setTimeout(showCompleteModal, 600);
    }
} else {
    // ❌ WRONG
    mistakeCount++;
    streak = 0;
    el.classList.add('wrong');
    el.classList.remove('selected');

    const secName = getSectionName(targetSection);
    showToast(`❌ Not quite! ${el.dataset.name} doesn't go in ${secName}`, 'error');

    setTimeout(() => el.classList.remove('wrong'), 800);
    updateScoreboard();
  }
}

// =============================================
// HELPERS
// =============================================

function getSectionName(sectionId) {
  return SECTIONS.find(s => s.id === sectionId)?.name || sectionId;
}

function updateSectionCount(sectionId) {
  const dropArea = document.getElementById(`drop-${sectionId}`);
  const placed = dropArea.querySelectorAll('.grocery-item.correct').length;
  const total = items.filter(i => i.section === sectionId).length;
  const countEl = document.getElementById(`count-${sectionId}`);
  const zoneEl = document.getElementById(`zone-${sectionId}`);

  countEl.textContent = `${placed}/${total}`;

  if (placed === total && total > 0) {
    countEl.classList.add('complete');
    zoneEl.classList.add('section-complete');
  } else {
    countEl.classList.remove('complete');
    zoneEl.classList.remove('section-complete');
  }
}

function updateScoreboard() {
  document.getElementById('sortedCount').textContent = `${correctCount} / ${totalItems}`;
  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('mistakeCount').textContent = mistakeCount;
  document.getElementById('streakCount').textContent = `🔥 ${streak}`;
}

function updateProgress() {
  const pct = totalItems > 0 ? Math.round((correctCount / totalItems) * 100) : 0;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressLabel').textContent = `${pct}% complete`;
}

function checkTrayEmpty() {
  const tray = document.getElementById('itemTray');
  const remaining = tray.querySelectorAll('.grocery-item:not(.correct)');
  if (remaining.length === 0) {
    document.getElementById('trayEmpty').style.display = 'block';
  }
}

// =============================================
// TIMER
// =============================================

function startTimerIfNeeded() {
  if (gameStarted) return;
  gameStarted = true;
  timerInterval = setInterval(() => {
    secondsElapsed++;
    document.getElementById('timerDisplay').textContent = formatTime(secondsElapsed);
  }, 1000);
}

function formatTime(secs) {
  const mins = Math.floor(secs / 60);
  const s = secs % 60;
  return `${mins}:${s.toString().padStart(2, '0')}`;
}

// =============================================
// TOAST
// =============================================

let toastTimeout;
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// =============================================
// HINT
// =============================================

function showHint() {
  const panel = document.getElementById('hintPanel');
  const unsorted = items.filter(i => !document.getElementById(i.id)?.classList.contains('correct'));

  if (unsorted.length === 0) {
    panel.classList.add('show');
    document.getElementById('hintText').textContent = 'All items are sorted! 🎉';
    return;
  }

  let target;
  if (selectedItem) {
    target = items.find(i => i.id === selectedItem);
  }
  if (!target || document.getElementById(target.id)?.classList.contains('correct')) {
    target = unsorted[Math.floor(Math.random() * unsorted.length)];
  }

  const sec = SECTIONS.find(s => s.id === target.section);
  
  let hintHTML = `
    <strong>${target.emoji} ${target.name}</strong> belongs in
    <strong>${sec.icon} ${sec.name}</strong>.<br>
    <em>${target.hint}</em>
  `;

  // Add Aussie vocab if available
  if (target.aussieVocab) {
    hintHTML += `<br><br>🇦🇺 <strong>Aussie Vocab:</strong> ${target.aussieVocab}`;
  }

  // Add a random glossary word as bonus
  if (Math.random() > 0.5 && AUSSIE_GLOSSARY.length > 0) {
    const randomWord = AUSSIE_GLOSSARY[Math.floor(Math.random() * AUSSIE_GLOSSARY.length)];
    hintHTML += `<br><br>📚 <strong>Bonus Slang:</strong> "${randomWord.word}" — ${randomWord.meaning}`;
  }

  document.getElementById('hintText').innerHTML = hintHTML;
  panel.classList.add('show');
}

// =============================================
// CHECK ALL — auto-sort remaining
// =============================================

function checkAll() {
  const unsorted = items.filter(i => !document.getElementById(i.id)?.classList.contains('correct'));

  if (unsorted.length === 0) {
    showToast('All items already sorted! 🎉', 'success');
    return;
  }

  if (!confirm(`This will auto-sort the remaining ${unsorted.length} items and end the round. Continue?`)) return;

  unsorted.forEach(item => {
    const el = document.getElementById(item.id);
    const dropArea = document.getElementById(`drop-${item.section}`);
    const placeholder = dropArea.querySelector('.drop-placeholder');
    if (placeholder) placeholder.remove();

    el.classList.add('correct', 'auto-sorted');
    el.classList.remove('selected');
    el.draggable = false;
    dropArea.appendChild(el);
    correctCount++;
    updateSectionCount(item.section);
  });

  updateScoreboard();
  updateProgress();
  checkTrayEmpty();
  setTimeout(showCompleteModal, 400);
}

// =============================================
// RESET
// =============================================

function resetGame() {
  document.getElementById('completeModal').classList.remove('show');
  initGame();
}

function nextDifficulty() {
  const levels = ['easy', 'medium', 'hard'];
  const idx = levels.indexOf(currentLevel);
  if (idx < levels.length - 1) {
    currentLevel = levels[idx + 1];
    document.querySelectorAll('.diff-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.level === currentLevel);
    });
  }
  resetGame();
}

// =============================================
// COMPLETE MODAL
// =============================================

function showCompleteModal() {
  clearInterval(timerInterval);

  const timeStr = formatTime(secondsElapsed);

  // Star rating
  const totalAttempts = correctCount + mistakeCount;
  const accuracy = totalAttempts > 0 ? correctCount / totalAttempts : 0;
  let stars = '⭐';
  if (accuracy >= 0.95 && mistakeCount <= 1) stars = '⭐⭐⭐';
  else if (accuracy >= 0.8 && mistakeCount <= 4) stars = '⭐⭐';

  // Title based on performance
  let emoji = '🎉';
  let title = 'Amazing!';
  let subtitle = 'You sorted all the groceries perfectly!';

  if (mistakeCount > totalItems * 0.5) {
    emoji = '💪';
    title = 'Keep Practising!';
    subtitle = 'You finished, but try again to make fewer mistakes.';
  } else if (mistakeCount > 5) {
    emoji = '👍';
    title = 'Good Work!';
    subtitle = 'You did well! Try again for 3 stars!';
  } else if (mistakeCount <= 1) {
    emoji = '🏆';
    title = 'Perfect!';
    subtitle = 'Almost no mistakes — you really know your sections!';
  }

  document.getElementById('modalEmoji').textContent = emoji;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalSubtitle').textContent = subtitle;
  document.getElementById('finalCorrect').textContent = correctCount;
  document.getElementById('finalMistakes').textContent = mistakeCount;
  document.getElementById('finalTime').textContent = timeStr;
  document.getElementById('finalStars').textContent = stars;

  // Badges
  const badges = [];
  if (mistakeCount === 0) badges.push('🎯 Perfect Score');
  if (bestStreak >= 10) badges.push('🔥 Hot Streak (10+)');
  else if (bestStreak >= 5) badges.push('🔥 On Fire (5+)');
  if (secondsElapsed < 60 && currentLevel === 'easy') badges.push('⚡ Speed Sorter');
  if (secondsElapsed < 120 && currentLevel === 'medium') badges.push('⚡ Quick Shopper');
  if (currentLevel === 'hard' && mistakeCount <= 3) badges.push('🏪 Store Expert');
  if (accuracy >= 0.9) badges.push('🧠 Sharp Mind');

  const badgeContainer = document.getElementById('modalBadges');
  badgeContainer.innerHTML = badges.length > 0
    ? badges.map(b => `<span class="badge-chip">${b}</span>`).join('')
    : '';

  document.getElementById('completeModal').classList.add('show');

  // Show learning summary
  showLearningSummary();
}

// =============================================
// LEARNING SUMMARY
// =============================================
// =============================================
// LEARNING SUMMARY — with Aussie Vocab
// =============================================

function showLearningSummary() {
  const container = document.getElementById('learningSummary');
  const sectionsDiv = document.getElementById('summarySections');

  // Section summary with items
  let summaryHTML = SECTIONS.map(sec => {
    const sectionItems = items.filter(i => i.section === sec.id);
    if (sectionItems.length === 0) return '';

    // Collect Aussie vocab from items in this section
    const vocabItems = sectionItems.filter(i => i.aussieVocab);

    return `
      <div class="summary-section" style="background: ${sec.color}; border-left-color: ${sec.borderColor};">
        <h4>${sec.icon} ${sec.name}</h4>
        <div class="summary-items">
          ${sectionItems.map(i => `${i.emoji} ${i.name}`).join(' &nbsp;·&nbsp; ')}
        </div>
        ${sec.aussieNote ? `<div style="margin-top:8px; font-size:0.82rem; color:#555; font-style:italic;">💡 ${sec.aussieNote}</div>` : ''}
        ${vocabItems.length > 0 ? `
          <div style="margin-top:10px; border-top:1px solid rgba(0,0,0,0.1); padding-top:8px;">
            <div style="font-size:0.78rem; font-weight:700; color:var(--dark-green); margin-bottom:4px;">🇦🇺 Aussie Vocab Learned:</div>
            ${vocabItems.map(i => `
              <div style="font-size:0.82rem; color:#444; margin-bottom:3px;">
                <strong>${i.emoji} ${i.name}:</strong> ${i.aussieVocab}
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  // Add Aussie Glossary bonus section
  const glossaryWords = AUSSIE_GLOSSARY
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);

  summaryHTML += `
    <div class="summary-section" style="background: #fff8e1; border-left-color: #f9a825; grid-column: 1 / -1;">
      <h4>🇦🇺 Bonus: Aussie Slang You Should Know!</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; margin-top: 10px;">
        ${glossaryWords.map(w => `
          <div style="background: white; padding: 8px 12px; border-radius: 8px; font-size: 0.85rem;">
            <strong style="color: var(--dark-green);">${w.word}</strong>
            <span style="color: #666;"> — ${w.meaning}</span>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:12px; font-size:0.8rem; color:#888; text-align:center;">
        Play again to see more Aussie words! There are ${AUSSIE_GLOSSARY.length} words to learn! 🇦🇺
      </div>
    </div>
  `;

  sectionsDiv.innerHTML = summaryHTML;
  container.style.display = 'block';
}