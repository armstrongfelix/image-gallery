const generateImagesArray = (count) => {
  const categories = ["nature", "city", "food", "people"];

  const metadata = {
    nature: {
      titles: [
        "Mountain Sunset",
        "Ocean Waves",
        "Forest Path",
        "Autumn Leaves",
        "Mountain Lake",
        "Lavender Field",
        "Desert Dunes",
        "River Stream",
        "Misty Morning",
        "Canyon Valley",
      ],
      descriptions: [
        "A beautiful sunset over mountain peaks.",
        "Crashing waves on a serene beach shoreline.",
        "A winding path through a dense green forest.",
        "Vibrant autumn colors on fallen leaves.",
        "Crystal clear lake surrounded by mountains.",
        "Endless rows of purple lavender.",
        "Golden sand dunes under a hot sun.",
        "A rushing river carving through rocks.",
        "Thick fog settling over a quiet meadow.",
        "Deep canyon walls stretching into the horizon.",
      ],
    },
    city: {
      titles: [
        "Urban Cityscape",
        "Night Skyline",
        "Bridge at Night",
        "Busy Street",
        "Skyscraper View",
        "Historic Alley",
        "Subway Station",
        "Rainy Neon Streets",
        "Central Park Border",
        "Modern Architecture",
      ],
      descriptions: [
        "Modern architecture and city skyline at dusk.",
        "City lights illuminating the night sky.",
        "A beautifully lit bridge reflecting on water.",
        "A bustling city street vibrant with activity.",
        "Looking up at towering glass skyscrapers.",
        "A quiet cobblestone alleyway in the old town.",
        "Commuters moving through a fast-paced station.",
        "Neon signs reflecting on wet asphalt.",
        "Where nature meets the urban concrete jungle.",
        "Sleek geometric lines of contemporary design.",
      ],
    },
    food: {
      titles: [
        "Delicious Pizza",
        "Gourmet Burger",
        "Coffee Art",
        "Fresh Salad",
        "Sushi Platter",
        "Sweet Pancakes",
        "Artisanal Bread",
        "Berry Smoothie",
        "Grilled Steak",
        "Assorted Macarons",
      ],
      descriptions: [
        "Freshly baked pizza with melted cheese.",
        "A juicy burger with fresh ingredients.",
        "Latte art on a freshly brewed cup.",
        "A healthy and colorful fresh garden salad.",
        "An artistic arrangement of fresh sushi rolls.",
        "Fluffy pancakes stacked with syrup and berries.",
        "Crispy crust bread fresh out of the oven.",
        "A refreshing blended mix of summer berries.",
        "Perfectly seared steak with rosemary.",
        "Delicate and colorful French confections.",
      ],
    },
    people: {
      titles: [
        "Street Photography",
        "Portrait Study",
        "Dancer Silhouette",
        "Laughter",
        "Musician on Stage",
        "Market Vendor",
        "Childhood Wonder",
        "Focused Artisan",
        "Friends Gathering",
        "Serene Meditation",
      ],
      descriptions: [
        "Candid street photography of everyday moments.",
        "A thoughtful portrait with dramatic lighting.",
        "A dancer captured in motion against the light.",
        "Genuine laughter captured in a candid moment.",
        "A guitarist losing themselves in the music.",
        "A local vendor interacting at an open market.",
        "A child looking up in absolute amazement.",
        "Hands carefully shaping a piece of pottery.",
        "A group of close friends sharing a warm meal.",
        "A quiet moment of peaceful reflection.",
      ],
    },
  };

  // A pool of known valid Lorem Picsum image IDs to ensure real images load
  const validPicsumIds = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
    68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87,
    88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 106,
    107, 108, 109, 110, 111, 112, 113,
  ];

  const images = [];

  for (let i = 1; i <= count; i++) {
    // Determine category based on cycling index
    const category = categories[(i - 1) % categories.length];
    const categoryData = metadata[category];

    // Select specific title and description indices
    const itemIndex =
      Math.floor((i - 1) / categories.length) % categoryData.titles.length;

    // Cycle unique image IDs from our valid pool, adding offsets if we exceed the pool size
    const baseId = validPicsumIds[(i - 1) % validPicsumIds.length];
    const uniqueId = baseId + Math.floor((i - 1) / validPicsumIds.length) * 3;

    images.push({
      id: i,
      title: `${categoryData.titles[itemIndex]} ${Math.ceil(i / 4)}`,
      url: `https://picsum.photos/id/${uniqueId}/600/400`,
      category: category,
      description: categoryData.descriptions[itemIndex],
    });
  }

  return images;
};

// Generate the 500 images
const images = generateImagesArray(500);
export const categories = ["all", "nature", "city", "food", "people"];
export default images;

// To view the output or copy it from your browser console:
// console.log(JSON.stringify(images, null, 2));
