export const authService = {
  getCurrentUser: () => {
    // Implémentez votre logique d'authentification ici
    return JSON.parse(localStorage.getItem('user') || 'null');
  },
  login: async (email: string, password: string) => {
    // Implémentez votre logique de connexion ici
    // Par exemple :
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }
}; 