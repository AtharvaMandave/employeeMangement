export const resetLocalStorage = () => {
    console.log("Clearing local storage...");
    localStorage.clear(); // Clear all localStorage data
    resetLocalStorage();    // Reinitialize data
  };
  