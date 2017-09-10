# Flexbox, Animation and more testing
### Exercises
- what is TDD?
  - Test Driven Development
  - add a test
  - run all tests
  - write some code
  - run tests
  - refactor code
  - repeat
- what is a unit?
  - the smallest testable part of ann application
  - a function, interface, class
- what is unit testing?
- what is the difference between TDD and unit testing?
  - unit testing is a component of TDD
- why should we write unit tests?
- ``var MAGIC_WORD`` = what is ``tape``?
- list at least one more ``MAGIC_WORD`` in JavaScript
- list three flexbox related CSS properties with a short definition

  - ``flex-grow``: expand elements into available space by rate, positive number.
  - ``flex-shrink``: shink elements, positive number.
  - ``flex-basis``: started width(similar like min-width) it will influence `flex-grow` and won't show scroll bar
  - ``flex``: shorthand of ``flex-grow (flex-shirink flex-basis)(optional)``Default is ``0 1 auto``

  - ``justify-content``: align items **horizontally**
    - ``flex-start``: Items align to the **left** side of the container.
    - ``flex-end``: Items align to the **right** side of the container.
    - ``center``: Items align at the **center** of the container.
    - ``space-between``: Items display with **equal spacing *between* them**.
    - ``space-around``: Items display with **equal spacing *around* them**.
  - ``align-items``: align items **vertically**
    - ``flex-start``: items align to the **top** of the container.
    - ``flex-end``: items align to the **bottom** of the container.
    - ``center``: items align at the **vertical center** of the container.
    - ``baseline``:items display at the **baseline** of the container.
    - ``stretch``: items are **stretched to fit** the container.
  - ``order``: by default, items have a value of **0**, you can set it to **positive** or **negative** integer value.
  - ``align-self``: accepts same values as ``align-items`` and it's value for the **specific item**
  - ``flex-direction``: defines the **direction items are placed** in the container
    - ``row``: items are placed the **same** as the text direction.
    - ``row-reverse``: items are palced **opposite** to the text direction.
    - ``column``: items are placed **top to bottom**.
    - ``column-reverse``: items are placed **bottom to top**.
  - ``flex-wrap``: 
    - ``nowrap``: **Every item** is fit to a **single** line.
    - ``wrap``: Items wrap around to **additional lines**(at bottom).
    - ``wrap-reverse``: Items wrap around to **additional lines in reverse** (at top).
  - ``flex-flow``: shorthand of ``flex-direction`` and ``flex-wrap``
    - for example: ``flex-flow: row wrap`` means ``flex-direction: row`` and ``flex-wrap: wrap``.
  - ``ailgn-content`` set how **multiple lines** are spaced apart from each other.
    - ``flex-start``: Lines are packed at the **top** of the container.
    - ``flex-end``: Lines are packed at the **bottom** of the container.
    - ``center``: Lines are packed at the **vertical center** of the container.
    - ``space-between``: Lines display with **equal spacing between** them.
    - ``space-around``: Lines display with **equal spacing around** them.
    - ``stretch``: Lines are **stretched to fit** the container.
    > ``align-content`` determines the spacing between lines, ``align-items`` determines how the items as a whole are aligned whitin the container. when there is only one line, ``align-content`` has no effect.
  