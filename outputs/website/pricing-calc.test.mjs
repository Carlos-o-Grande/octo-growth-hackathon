// Checks the pricing page calculator: node outputs/website/pricing-calc.test.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const html = readFileSync(new URL('./landing/pricing.html', import.meta.url), 'utf8');
const src = html.split('<script>\n').pop().split('const $ =')[0];
const quote = new Function(src + 'return quote;')();
const q = h => quote(h).best;
assert.equal(quote(20).credits, 6000);
assert.equal(q(10), 'Pay as you go, about $30');          // under $49 of usage: PAYG wins
assert.equal(q(20), 'Starter, $49 a month');               // 6,000 credits: Starter covers it
assert.equal(q(41), 'Team, $99 a month + $3 top-up');      // just over Team: top up, don't jump to Business
assert.equal(q(40), 'Team, $99 a month');
assert.equal(q(100), 'Business, $249 a month');
assert.equal(q(120), 'Business, $249 a month + $60 top-up');
assert.equal(quote(120).enterprise, true);
assert.equal(quote(5).plan.name, 'Starter');
assert.equal(quote(101).plan, null);
console.log('pricing calculator tests passed');
