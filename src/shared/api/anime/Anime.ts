export async function getAnime(page = 1, limit = 25) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?page=${page}&limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
