export const getDirection = (degrees) => {

  // Define array of directions
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  // Split into the 8 directions
  degrees = degrees * 8 / 360;

  // round to nearest integer.
  degrees = Math.round(degrees, 0);

  // Ensure it's within 0-7
  degrees = (degrees + 8) % 8

  return directions[degrees]
}