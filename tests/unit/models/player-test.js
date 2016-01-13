import { moduleForModel, test } from 'ember-qunit';

moduleForModel('player', 'Unit | Model | player', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it has a position', function(assert) {
  let player = this.subject();
  player.position = 'wr';
  assert.equal(player.position, 'wr', 'position');
});

test('it has a position', function(assert) {
  let player = this.subject();
  player.team = 'ne';
  assert.equal(player.position, 'ne', 'team');
});
