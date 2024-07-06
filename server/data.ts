"use server";
import * as fs from 'fs';

interface groundTypeEntry {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  type: string
}

/**
 * Retrieves ground type entries from a JSON file.
 * @returns A promise that resolves to an array of ground type entries.
 */
export async function getGroundTypeEntries(): Promise<groundTypeEntry[]> {
  // Read the JSON file
  const data = JSON.parse(fs.readFileSync('./data/groundTypes.json', 'utf8'));

  // Map the data to ground type entries
  const output: groundTypeEntry[] = data.map((item: any[]) => {
    return ({
      x1: item[2],
      y1: item[0],
      x2: item[3],
      y2: item[1],
      type: item[4]
    });
  });

  // Return the output
  return output;
}
