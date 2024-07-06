import { getGroundTypeEntries } from "./data";

// Mock fs.readFileSync
jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue('[]'),
}));

/**
 * Test suite for the getGroundTypeEntries function.
 */
describe('getGroundTypeEntries', () => {
  /**
   * Test case to verify that the function retrieves ground type entries from a JSON file.
   */
  it('should retrieve ground type entries from a JSON file', async () => {
    const result = await getGroundTypeEntries();
    expect(result).toEqual([]);
  });
});
