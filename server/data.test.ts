import { getGroundTypeEntries } from "./data";

// Mock fs.readFileSync
jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue('[]'),
}));

describe('getGroundTypeEntries', () => {
  it('should retrieve ground type entries from a JSON file', async () => {
    const result = await getGroundTypeEntries();
    expect(result).toEqual([]);
  });
});
