
export const useFarms = () => {
    
    // TODO: get this data from Firebase
    const farms = [
        {
          name: "Farm Farang",
          position: { lat: 12.9855507, lng: 99.8155533 },
        },
        {
          name: "Mr. Microgreens Farm",
          position: { lat: 14, lng: 100.75 },
        },
      ];

  return [farms];
};
