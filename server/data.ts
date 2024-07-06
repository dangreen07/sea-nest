"use server";
import * as fs from 'fs';

interface groundTypeEntry {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  type: string
}

export interface groundLevelEntry {
  x: number,
  y: number,
  w: number
}

export interface habitatEntry {
  latitude: number,
  longitude: number
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

/**
 * Retrieves the ground level entries from a JSON file.
 * @returns {Promise<groundLevelEntry[]>} A promise that resolves to an array of ground level entries.
 */
export async function getGroundLevelEntries() {
  const data: groundLevelEntry[] = JSON.parse(fs.readFileSync('./data/groundLevels.json', 'utf8'));
  return data;
}

export async function getHabitatEntries() {
  const data: habitatEntry[] = JSON.parse(fs.readFileSync('./data/habitats.json', 'utf8'));
  console.log(data)
  return data;
}