const supabaseUrl = "https://adzdsjyjakcsisergckt.supabase.co";
const supabaseKey = "sb_publishable_-9Maej0xtPLvJWtMTvZtbw_2YPHtxzu";
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// ── Shared toast helper ──────────────────────────────────────────────────────
function showToast(msg, type = '') {
  let t = document.getElementById('hc-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'hc-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast ' + type;
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── XSS-safe text escaping ───────────────────────────────────────────────────
function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Highlight active nav item ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(el => {
    if (el.getAttribute('href') === page) el.classList.add('active');
  });
});
