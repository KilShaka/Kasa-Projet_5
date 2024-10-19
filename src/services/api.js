const API = "/logements.json";
// "/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
//   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
export async function fetchRentalListing() {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la tentative de connexion à L'API: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Les données de location n'ont pas pu être récupérées",
      error
    );
    throw error;
  }
}
