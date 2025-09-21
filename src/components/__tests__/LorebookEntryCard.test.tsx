import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';

const dummyEntry: any = {
  uid: 1,
  comment: 'Test entry',
  key: ['trigger'],
  keysecondary: [],
  content: 'Some content',
  disable: false,
  position: 0,
  depth: 0,
  roleAtDepth: 0,
};

// Skipped pending jsdom environment availability
describe.skip('LorebookEntryCard', () => {
  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  test('toggles expansion', async () => {
    const { LorebookEntryCard } = await import('../LorebookEntryCard.js');
    act(() => {
      root.render(
        <LorebookEntryCard
          entry={dummyEntry}
          worldName="world"
          isSelected={false}
          onToggleSelect={() => {}}
          onChange={() => {}}
          onSave={() => {}}
          onDelete={() => {}}
          categoryId={null}
          categoryOptions={[]}
          onCategoryChange={() => {}}
          onAssignOrderRange={() => {}}
        />,
      );
    });

    const card = container.querySelector('.entry-card') as HTMLDivElement;
    expect(card.classList.contains('expanded')).toBe(false);

    const toggle = container.querySelector('.entry-card__actions .menu_button') as HTMLButtonElement;
    act(() => {
      toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(card.classList.contains('expanded')).toBe(true);
  });

  test('calls onToggleSelect when checkbox changes', async () => {
    const { LorebookEntryCard } = await import('../LorebookEntryCard.js');
    const onToggleSelect = jest.fn();
    act(() => {
      root.render(
        <LorebookEntryCard
          entry={dummyEntry}
          worldName="world"
          isSelected={false}
          onToggleSelect={onToggleSelect}
          onChange={() => {}}
          onSave={() => {}}
          onDelete={() => {}}
          categoryId={null}
          categoryOptions={[]}
          onCategoryChange={() => {}}
          onAssignOrderRange={() => {}}
        />,
      );
    });

    const checkbox = container.querySelector('.entry-card__select input[type="checkbox"]') as HTMLInputElement;
    act(() => {
      checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onToggleSelect).toHaveBeenCalledWith('world', 1, expect.any(Object));
  });
});
