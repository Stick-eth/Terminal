
import { describe, it, expect, beforeEach } from 'vitest';

// Helper to calculate tokens based on levels survived
// Formula: Sum(1..semesters) where semester = floor(level/3)
function calculateTokensForLevel(level) {
    // If level < 3, 0 tokens (0 semesters)
    if (level < 3) return 0;

    // Calculate full semesters survived (every 3 levels)
    const semesters = Math.floor(level / 3);

    // Sum of integers from 1 to semesters: n(n+1)/2
    return (semesters * (semesters + 1)) / 2;
}

describe('Progressive Token Rewards', () => {
    it('should award 0 tokens for levels below 3', () => {
        expect(calculateTokensForLevel(1)).toBe(0);
        expect(calculateTokensForLevel(2)).toBe(0);
    });

    it('should award 1 token for level 3 (1 semester)', () => {
        // Semester 1: +1 token
        expect(calculateTokensForLevel(3)).toBe(1);
        expect(calculateTokensForLevel(5)).toBe(1);
    });

    it('should award 3 tokens for level 6 (2 semesters)', () => {
        // Semester 1: +1
        // Semester 2: +2
        // Total: 3
        expect(calculateTokensForLevel(6)).toBe(3);
        expect(calculateTokensForLevel(8)).toBe(3);
    });

    it('should award 6 tokens for level 9 (3 semesters)', () => {
        // Semester 1: +1
        // Semester 2: +2
        // Semester 3: +3
        // Total: 6
        expect(calculateTokensForLevel(9)).toBe(6);
    });

    it('should award 10 tokens for level 12 (4 semesters)', () => {
        // 1+2+3+4 = 10
        expect(calculateTokensForLevel(12)).toBe(10);
    });
});
