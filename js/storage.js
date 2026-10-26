/**
 * Magyar Floptropica – FlopFiók & ID kezelés
 * Egyszerű localStorage alapú "adatbázis"
 */

const STORAGE_KEY = 'magyar_floptropica_users';
const CURRENT_USER_KEY = 'magyar_floptropica_current';

// --- Segédfüggvények ---

function generateId(prefix = 'MF') {
  const year = new Date().getFullYear().toString().slice(-2);
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${year}-${random}`;
}

function generatePassportNumber() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let result = 'P';
  for (let i = 0; i < 2; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  result += Math.floor(1000000 + Math.random() * 9000000);
  return result;
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  try {
    const id = localStorage.getItem(CURRENT_USER_KEY);
    if (!id) return null;
    const users = getUsers();
    return users.find(u => u.id === id) || null;
  } catch {
    return null;
  }
}

function setCurrentUser(userId) {
  if (userId) {
    localStorage.setItem(CURRENT_USER_KEY, userId);
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

// --- Fő funkciók ---

/**
 * Új FlopFiók létrehozása
 */
function createAccount({ name, email, city, birthDate, reason }) {
  const users = getUsers();

  // Email egyediség ellenőrzése
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'Ezzel az e-mail címmel már létezik fiók.' };
  }

  const newUser = {
    id: generateId('MF'),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    city: city || '',
    birthDate: birthDate || '',
    reason: reason || '',
    createdAt: new Date().toISOString(),
    flopId: null,          // később generálható
    passport: null,        // később generálható
    citizenship: true      // állampolgárság automatikusan jár
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser.id);

  return { success: true, user: newUser };
}

/**
 * Bejelentkezés e-mail alapján (egyszerű demó)
 */
function login(email) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return { success: false, error: 'Nem található fiók ezzel az e-mail címmel.' };
  }
  setCurrentUser(user.id);
  return { success: true, user };
}

function logout() {
  setCurrentUser(null);
}

/**
 * FlopID generálása a bejelentkezett felhasználónak
 */
function generateFlopID() {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Nincs bejelentkezve.' };

  if (user.flopId) {
    return { success: true, flopId: user.flopId, alreadyExists: true };
  }

  const flopId = {
    number: generateId('FID'),
    issuedAt: new Date().toISOString(),
    validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString(),
    status: 'Érvényes'
  };

  // Frissítjük a usert
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx !== -1) {
    users[idx].flopId = flopId;
    saveUsers(users);
  }

  return { success: true, flopId, alreadyExists: false };
}

/**
 * eÚtlevél generálása
 */
function generatePassport() {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Nincs bejelentkezve.' };

  if (user.passport) {
    return { success: true, passport: user.passport, alreadyExists: true };
  }

  const passport = {
    number: generatePassportNumber(),
    issuedAt: new Date().toISOString(),
    validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 10)).toISOString(),
    nationality: 'Magyar Floptropicai',
    status: 'Érvényes'
  };

  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx !== -1) {
    users[idx].passport = passport;
    saveUsers(users);
  }

  return { success: true, passport, alreadyExists: false };
}

/**
 * Felhasználó adatainak frissítése
 */
function updateUser(updates) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Nincs bejelentkezve.' };

  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx === -1) return { success: false, error: 'Felhasználó nem található.' };

  users[idx] = { ...users[idx], ...updates };
  saveUsers(users);
  return { success: true, user: users[idx] };
}
