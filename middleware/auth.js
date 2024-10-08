export default function ({ store, redirect }) {
    // Check if the user is authenticated
    if (!store.state.authenticated) {
      return redirect('/login'); // Redirect to the login page
    }
  }
  