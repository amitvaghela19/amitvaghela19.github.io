/**
 * Build the site and force-push dist/ to the gh-pages branch.
 * GitHub Pages is configured to publish from that branch.
 *
 * Usage: node scripts/deploy-gh-pages.mjs
 */
import { spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync, cpSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

function run(command, args, cwd = root) {
  const result = spawnSync(command, args, { cwd, stdio: 'inherit', shell: true })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

run('npm', ['run', 'build'])

const work = mkdtempSync(join(tmpdir(), 'gh-pages-'))
try {
  cpSync(join(root, 'dist'), work, { recursive: true })
  writeFileSync(join(work, '.nojekyll'), '')
  run('git', ['init', '-b', 'gh-pages'], work)
  run('git', ['add', '-A'], work)
  run('git', ['-c', 'user.name=amitvaghela19', '-c', 'user.email=amitvaghela19@gmail.com', 'commit', '-m', 'Deploy site'], work)
  run('git', ['remote', 'add', 'origin', 'https://github.com/amitvaghela19/amitvaghela19.github.io.git'], work)
  run('git', ['push', '-f', 'origin', 'gh-pages'], work)
  console.log('Pushed dist/ to gh-pages. Pages will update once GitHub finishes building.')
} finally {
  rmSync(work, { recursive: true, force: true })
}
