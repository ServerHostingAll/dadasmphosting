// Nella tua funzione di richiesta hosting
const requestHosting = async (plan) => {
  setLoading(true);
  try {
    await fetch('/api/request-server', {
      method: 'POST',
      body: JSON.stringify({ userId: 'USER_ID_DI_PROVA', plan }),
      headers: { 'Content-Type': 'application/json' }
    });
    alert("Richiesta inviata! Lo staff approverà il server a breve.");
  } catch (error) {
    alert("Errore nell'invio.");
  }
  setLoading(false);
};