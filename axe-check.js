const path = require('path')
const fs = require('fs')
const { AxePuppeteer } = require('@axe-core/puppeteer')

async function runAccessibilityCheck() {
  const puppeteer = require('puppeteer')
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  const filePath = path.join(__dirname, 'index.html')
  const fileUrl = `file://${filePath}`
  await page.goto(fileUrl)
  const results = await new AxePuppeteer(page).analyze()
  await browser.close()

  const { violations } = results
  let report = '<h2>Accessibility Violations Check 🔎</h2>'

  if (violations.length === 0) {
    console.log('No accessibility violations found.')
    report += '<h3>✅ No accessibility violations found.</h3>'
  } else {
    console.log('Accessibility violations found:')
    report += '<h3>⏳ Accessibility violations found.</h3>'
    for (const violation of violations) {
      report += `<h4>${violation.description}</h4>`

      if (violation.impact === 'critical') {
        report +=
          '<h5> ❌ Critical accessibility violations found.</h5><h6>See comments below.</h6>'
        console.error('Critical accessibility violations found.')
        process.exitCode = 1 // Set exit code to indicate failure
      } else {
        report += '<h5>✅ No critical accessibility violations found.</h5>'
      }

      report += `<a href="${violation.helpUrl}">${violation.help}</a><ul>`
      report += `<li>Impact: <strong>${violation.impact}</strong></li>`
      report += `<li>Tags: ${violation.tags
        .map((tag) => `<code>${tag}</code>`)
        .join(', ')}</li></ul>`
      let nodes = '<ol>'
      for (const node of violation.nodes) {
        const failureSummaryTitle = node.failureSummary.split('\n  ')[0]
        const failureSummaryList = node.failureSummary.split('\n  ').slice(1)
        const encodedHTML = node.html
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
        nodes += `<li><strong>Node:</strong><pre><code>${encodedHTML}</code></pre> <strong>Impact:</strong>${
          node.impact
        }</li>
        <h6>${failureSummaryTitle}</h6>
        <ul>${failureSummaryList.map((list) => `<li>${list}</li>`)}</ul>`
      }
      nodes += '</ol>'
      report += `<details><summary>Click here for detailed report</summary>`
      report += nodes
      report += '</details>'
    }

    console.log('Accessibility report generated.')
  }
  fs.writeFileSync(
    'accessibility_report.html',
    report.replace(/[\n\r]/g, '').replace(/"/g, '\\"'),
    'utf8'
  )
}

runAccessibilityCheck()
