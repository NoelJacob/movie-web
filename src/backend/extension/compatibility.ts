import { satisfies } from "semver";

const allowedExtensionRange = "^1.0.2";

/**
 * Check if the given version is allowed for the extension.
 *
 * @param {string} version - The version to check.
 * @returns {boolean} - True if the version is allowed, false otherwise.
 */
export function isAllowedExtensionVersion(version: string): boolean {
  return satisfies(version, allowedExtensionRange);
}
