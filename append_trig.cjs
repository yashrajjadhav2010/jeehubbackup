const fs = require('fs');

const newQuestions = `    ,
    {
      id: "trig-pyq-15",
      question: "Let $\\\\theta \\\\in \\\\left(0, \\\\frac{\\\\pi}{4}\\\\right)$ and $t_1 = (\\\\tan\\\\theta)^{\\\\tan\\\\theta}$, $t_2 = (\\\\tan\\\\theta)^{\\\\cot\\\\theta}$, $t_3 = (\\\\cot\\\\theta)^{\\\\tan\\\\theta}$ and $t_4 = (\\\\cot\\\\theta)^{\\\\cot\\\\theta}$, then: (JEE 2006)",
      options: [
        "$t_1 > t_2 > t_3 > t_4$",
        "$t_4 > t_3 > t_1 > t_2$",
        "$t_3 > t_1 > t_2 > t_4$",
        "$t_2 > t_3 > t_1 > t_4$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\\n\\n1. **Analyze the range of $\\\\tan\\\\theta$ and $\\\\cot\\\\theta$:**\\nSince $\\\\theta \\\\in \\\\left(0, \\\\frac{\\\\pi}{4}\\\\right)$, we have:\\n$$0 < \\\\tan\\\\theta < 1 \\\\quad \\\\text{and} \\\\quad \\\\cot\\\\theta > 1$$\\nConsequently, $\\\\tan\\\\theta < \\\\cot\\\\theta$.\\n\\n2. **Express all terms with a common base:**\\nLet $x = \\\\tan\\\\theta$, where $0 < x < 1$. Then $\\\\cot\\\\theta = \\\\frac{1}{x}$. Rewrite the four quantities:\\n* $t_1 = x^x$\\n* $t_2 = x^{1/x}$\\n* $t_3 = \\\\left(\\\\frac{1}{x}\\\\right)^x = x^{-x}$\\n* $t_4 = \\\\left(\\\\frac{1}{x}\\\\right)^{1/x} = x^{-1/x}$\\n\\n3. **Compare the exponents:**\\nSince $x > 0$ and $\\\\frac{1}{x} > 1$, order the exponents from smallest to largest:\\n$$-\\\\frac{1}{x} < -x < x < \\\\frac{1}{x}$$\\n\\n4. **Apply the base property:**\\nWhen the base $x$ lies strictly between $0$ and $1$ ($0 < x < 1$), the function $f(y) = x^y$ is strictly decreasing. Therefore, a larger exponent results in a smaller overall value (reversing the inequality order):\\n$$x^{-1/x} > x^{-x} > x^x > x^{1/x}$$\\n$$t_4 > t_3 > t_1 > t_2$$"
    },
    {
      id: "trig-pyq-16",
      question: "The number of solutions of the pair of equations $2\\\\sin^2\\\\theta - \\\\cos2\\\\theta = 0$, $2\\\\cos^2\\\\theta - 3\\\\sin\\\\theta = 0$ in the interval $[0, 2\\\\pi]$ is: (JEE 2007)",
      options: [
        "zero",
        "one",
        "two",
        "four"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\\n\\n1. **Solve the first equation:**\\n$$2\\\\sin^2\\\\theta - \\\\cos2\\\\theta = 0$$\\nSubstitute the double-angle identity $\\\\cos2\\\\theta = 1 - 2\\\\sin^2\\\\theta$:\\n$$2\\\\sin^2\\\\theta - (1 - 2\\\\sin^2\\\\theta) = 0 \\\\implies 4\\\\sin^2\\\\theta = 1 \\\\implies \\\\sin\\\\theta = \\\\pm\\\\frac{1}{2}$$\\n\\n2. **Solve the second equation:**\\n$$2\\\\cos^2\\\\theta - 3\\\\sin\\\\theta = 0$$\\nSubstitute $\\\\cos^2\\\\theta = 1 - \\\\sin^2\\\\theta$:\\n$$2(1 - \\\\sin^2\\\\theta) - 3\\\\sin\\\\theta = 0 \\\\implies 2\\\\sin^2\\\\theta + 3\\\\sin\\\\theta - 2 = 0$$\\nFactor the quadratic expression:\\n$$(2\\\\sin\\\\theta - 1)(\\\\sin\\\\theta + 2) = 0$$\\n* Since $\\\\sin\\\\theta = -2$ is impossible, this gives: $\\\\sin\\\\theta = \\\\frac{1}{2}$.\\n\\n3. **Find common simultaneous solutions:**\\nFor a value to be a solution to the *pair* of equations, it must satisfy both conditions simultaneously. Comparing the results:\\n* Equation 1 requires $\\\\sin\\\\theta = \\\\pm\\\\frac{1}{2}$.\\n* Equation 2 requires $\\\\sin\\\\theta = \\\\frac{1}{2}$.\\n\\nThe common condition is $\\\\sin\\\\theta = \\\\frac{1}{2}$. Within the standard interval $[0, 2\\\\pi]$, this occurs exactly at $2$ distinct points: $\\\\theta = \\\\frac{\\\\pi}{6}$ and $\\\\theta = \\\\frac{5\\\\pi}{6}$."
    },
    {
      id: "trig-pyq-17",
      question: "For $x \\\\in (0, \\\\pi)$, the equation $\\\\sin x + 2\\\\sin 2x - \\\\sin 3x = 3$ has: (JEE Adv. 2014)",
      options: [
        "infinitely many solutions",
        "three solutions",
        "one solution",
        "no solution"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\\n\\n1. **Group and simplify the terms using difference-to-product identities:**\\nCombine the $\\\\sin x$ and $\\\\sin 3x$ terms:\\n$$(\\\\sin x - \\\\sin 3x) + 2\\\\sin 2x = 3$$\\nUsing $\\\\sin C - \\\\sin D = 2\\\\cos\\\\left(\\\\frac{C+D}{2}\\\\right)\\\\sin\\\\left(\\\\frac{C-D}{2}\\\\right)$:\\n$$-2\\\\sin x \\\\cos 2x + 2\\\\sin 2x = 3$$\\nRearranging gives:\\n$$2\\\\sin 2x - 2\\\\sin x \\\\cos 2x = 3$$\\n\\n2. **Determine the upper bound using linear combination forms:**\\nFor a fixed value of $x$, the left-hand side expression is a linear combination of $\\\\sin 2x$ and $\\\\cos 2x$ in the form $A\\\\sin\\\\theta + B\\\\cos\\\\theta$, whose maximum mathematical threshold is bounded by $\\\\sqrt{A^2 + B^2}$:\\n$$2\\\\sin 2x - 2\\\\sin x \\\\cos 2x \\\\leq \\\\sqrt{(2)^2 + (-2\\\\sin x)^2}$$\\n$$\\\\text{LHS} \\\\leq \\\\sqrt{4 + 4\\\\sin^2 x} = 2\\\\sqrt{1 + \\\\sin^2 x}$$\\n\\n3. **Evaluate the maximum possible value:**\\nSince the maximum value of $\\\\sin^2 x$ for any real parameter is $1$:\\n$$\\\\text{LHS} \\\\leq 2\\\\sqrt{1 + 1} = 2\\\\sqrt{2} \\\\approx 2.828$$\\n\\n4. **Conclusion:**\\nBecause the maximum possible value the left-hand side can ever achieve is approximately $2.828$, it can never reach $3$. Thus, the equation has no real solutions."
    },
    {
      id: "trig-pyq-18",
      question: "For $\\\\theta, \\\\phi \\\\in [0, 2\\\\pi]$ such that $2\\\\cos\\\\theta(1 - \\\\sin\\\\phi) = \\\\sin^2\\\\theta\\\\left(\\\\tan\\\\frac{\\\\theta}{2} + \\\\cot\\\\frac{\\\\theta}{2}\\\\right)\\\\cos\\\\phi - 1$, $\\\\tan(2\\\\pi - \\\\theta) > 0$ and $-1 < \\\\sin\\\\theta < -\\\\frac{\\\\sqrt{3}}{2}$, then $\\\\phi$ cannot satisfy: (JEE 2009)",
      options: [
        "$0 < \\\\phi < \\\\frac{\\\\pi}{2}$",
        "$\\\\frac{\\\\pi}{2} < \\\\phi < \\\\frac{4\\\\pi}{3}$",
        "$\\\\frac{4\\\\pi}{3} < \\\\phi < \\\\frac{3\\\\pi}{2}$",
        "$\\\\frac{3\\\\pi}{2} < \\\\phi < \\\\frac{2\\\\pi}{3}$"
      ],
      answer: 3,
      explanation: "**Detailed Solution:**\\n\\n1. **Simplify the algebraic trigonometry expression:**\\nRecall that $\\\\tan\\\\frac{\\\\theta}{2} + \\\\cot\\\\frac{\\\\theta}{2} = \\\\frac{\\\\sin(\\\\theta/2)}{\\\\cos(\\\\theta/2)} + \\\\frac{\\\\cos(\\\\theta/2)}{\\\\sin(\\\\theta/2)} = \\\\frac{1}{\\\\sin(\\\\theta/2)\\\\cos(\\\\theta/2)} = \\\\frac{2}{\\\\sin\\\\theta}$.\\nSubstitute this into the primary equation:\\n$$2\\\\cos\\\\theta(1 - \\\\sin\\\\phi) = \\\\sin^2\\\\theta\\\\left(\\\\frac{2}{\\\\sin\\\\theta}\\\\right)\\\\cos\\\\phi - 1$$\\n$$2\\\\cos\\\\theta - 2\\\\cos\\\\theta\\\\sin\\\\phi = 2\\\\sin\\\\theta\\\\cos\\\\phi - 1$$\\n$$2\\\\cos\\\\theta + 1 = 2(\\\\sin\\\\theta\\\\cos\\\\phi + \\\\cos\\\\theta\\\\sin\\\\phi) \\\\implies \\\\sin(\\\\theta + \\\\phi) = \\\\cos\\\\theta + \\\\frac{1}{2}$$\\n\\n2. **Find the valid boundaries for $\\\\theta$:**\\n* $\\\\tan(2\\\\pi - \\\\theta) > 0 \\\\implies -\\\\tan\\\\theta > 0 \\\\implies \\\\tan\\\\theta < 0$ (Quadrant II or IV).\\n* $-1 < \\\\sin\\\\theta < -\\\\frac{\\\\sqrt{3}}{2}$ (Sine is strictly negative, indicating Quadrant III or IV).\\n\\nCombining these, $\\\\theta$ must lie firmly in the **fourth quadrant** (Quadrant IV):\\n$$\\\\frac{3\\\\pi}{2} < \\\\theta < \\\\frac{5\\\\pi}{3}$$\\n\\n3. **Bound the value of $\\\\cos\\\\theta + \\\\frac{1}{2}$:**\\nFor $\\\\theta \\\\in \\\\left(\\\\frac{3\\\\pi}{2}, \\\\frac{5\\\\pi}{3}\\\\right)$, the cosine function is bounded by $0 < \\\\cos\\\\theta < \\\\frac{1}{2}$. Therefore:\\n$$\\\\frac{1}{2} < \\\\cos\\\\theta + \\\\frac{1}{2} < 1 \\\\implies \\\\frac{1}{2} < \\\\sin(\\\\theta + \\\\phi) < 1$$\\n\\n4. **Determine the allowable range for $\\\\phi$:**\\nFrom the sine bounds, the angle combination satisfies:\\n$$\\\\frac{13\\\\pi}{6} < \\\\theta + \\\\phi < \\\\frac{17\\\\pi}{6}$$\\nSubtracting the bounds of $\\\\theta$ to isolate $\\\\phi$:\\n$$\\\\frac{13\\\\pi}{6} - \\\\frac{5\\\\pi}{3} < \\\\phi < \\\\frac{17\\\\pi}{6} - \\\\frac{3\\\\pi}{2} \\\\implies \\\\frac{\\\\pi}{2} < \\\\phi < \\\\frac{4\\\\pi}{3}$$\\n\\nThus, $\\\\phi$ matches the interval in option (b), which means it **cannot** satisfy the range provided in option (d)."
    },
    {
      id: "trig-pyq-19",
      question: "The number of points in $(-\\\\infty, \\\\infty)$, for which $x^2 - x\\\\sin x - \\\\cos x = 0$, is: (JEE Adv. 2013)",
      options: [
        "6",
        "4",
        "2",
        "0"
      ],
      answer: 2,
      explanation: "**Detailed Solution:**\\n\\n1. **Define the function and find its derivative:**\\nLet $f(x) = x^2 - x\\\\sin x - \\\\cos x$.\\n$$f'(x) = 2x - (\\\\sin x + x\\\\cos x) + \\\\sin x = 2x - x\\\\cos x = x(2 - \\\\cos x)$$\\n\\n2. **Analyze the intervals of monotonicity:**\\nSince the term $(2 - \\\\cos x)$ is always strictly positive for all real values of $x$, the sign of the derivative is solely dependent on $x$:\\n* For $x > 0$, $f'(x) > 0 \\\\implies f(x)$ is strictly increasing.\\n* For $x < 0$, $f'(x) < 0 \\\\implies f(x)$ is strictly decreasing.\\n\\n3. **Check the inflection point and limits:**\\n* At the critical point $x = 0$: $f(0) = 0 - 0 - \\\\cos(0) = -1$.\\n* As $x \\\\to \\\\infty$, $f(x) \\\\to \\\\infty$.\\n* As $x \\\\to -\\\\infty$, $f(x) \\\\to \\\\infty$.\\n\\n4. **Apply Intermediate Value Theorem:**\\n* On the interval $(-\\\\infty, 0)$, the function drops from $\\\\infty$ down to $-1$, crossing the x-axis exactly once.\\n* On the interval $(0, \\\\infty)$, the function climbs from $-1$ up to $\\\\infty$, crossing the x-axis exactly once.\\n\\nTherefore, the equation has exactly 2 distinct real roots."
    },
    {
      id: "trig-pyq-20",
      question: "Let $f(x) = x\\\\sin\\\\pi x$, $x > 0$. Then for all natural numbers $n$, $f'(x)$ vanishes at: (JEE Adv. 2013)",
      options: [
        "A unique point in the interval $\\\\left(n, n + \\\\frac{1}{2}\\\\right)$",
        "A unique point in the interval $\\\\left(n + \\\\frac{1}{2}, n + 1\\\\right)$",
        "A unique point in the interval $(n, n + 1)$",
        "Two points in the interval $(n, n + 1)$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\\n\\n1. **Compute the derivative equation:**\\nUsing the product rule:\\n$$f'(x) = \\\\sin\\\\pi x + \\\\pi x\\\\cos\\\\pi x$$\\nSetting the derivative to zero ($f'(x) = 0$) gives:\\n$$\\\\sin\\\\pi x + \\\\pi x\\\\cos\\\\pi x = 0 \\\\implies \\\\tan\\\\pi x = -\\\\pi x$$\\n\\n2. **Analyze using graphical substitution:**\\nLet $\\\\theta = \\\\pi x$. Since $x > 0$, we look for intersections of $y = \\\\tan\\\\theta$ and $y = -\\\\theta$ inside the shifted intervals:\\n* For $x \\\\in (n, n+1)$, the angle variable spans $\\\\theta \\\\in (n\\\\pi, (n+1)\\\\pi)$.\\n\\n3. **Evaluate sub-intervals:**\\n* In the first half of the interval $\\\\theta \\\\in \\\\left(n\\\\pi, n\\\\pi + \\\\frac{\\\\pi}{2}\\\\right)$, $\\\\tan\\\\theta$ is always positive, while $-\\\\theta$ is negative. They cannot intersect.\\n* In the second half of the interval $\\\\theta \\\\in \\\\left(n\\\\pi + \\\\frac{\\\\pi}{2}, (n+1)\\\\pi\\\\right)$, $\\\\tan\\\\theta$ continuously increases from $-\\\\infty$ to $0$, while the line $y = -\\\\theta$ stays negative and linear. They must intersect at exactly one unique point.\\n\\n4. **Translate back to the $x$ variable:**\\n$$n\\\\pi + \\\\frac{\\\\pi}{2} < \\\\pi x < (n+1)\\\\pi \\\\implies n + \\\\frac{1}{2} < x < n + 1$$"
    },
    {
      id: "trig-pyq-21",
      question: "$ABCD$ is a trapezium such that $AB$ and $CD$ are parallel and $BC \\\\perp CD$. If $\\\\angle ADB = \\\\theta$, $BC = p$ and $CD = q$, then $AB$ is equal to: (JEE M 2013)",
      options: [
        "$\\\\frac{(p^2 + q^2)\\\\sin\\\\theta}{p\\\\cos\\\\theta + q\\\\sin\\\\theta}$",
        "$\\\\frac{p^2 + q^2\\\\cos\\\\theta}{p\\\\cos\\\\theta + q\\\\sin\\\\theta}$",
        "$\\\\frac{p^2 + q^2}{p^2\\\\cos\\\\theta + q^2\\\\sin\\\\theta}$",
        "$\\\\frac{(p^2 + q^2)\\\\sin\\\\theta}{(p\\\\cos\\\\theta + q\\\\sin\\\\theta)^2}$"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\\n\\n1. **Analyze the geometry of the trapezium:**\\nSince $BC \\\\perp CD$, $\\\\triangle BCD$ is a right-angled triangle at $C$. Using Pythagoras theorem:\\n$$BD = \\\\sqrt{BC^2 + CD^2} = \\\\sqrt{p^2 + q^2}$$\\nLet $\\\\angle BDC = \\\\alpha$. From $\\\\triangle BCD$:\\n$$\\\\sin\\\\alpha = \\\\frac{p}{\\\\sqrt{p^2+q^2}} \\\\quad \\\\text{and} \\\\quad \\\\cos\\\\alpha = \\\\frac{q}{\\\\sqrt{p^2+q^2}}$$\\n\\n2. **Relate angles using parallel line properties:**\\nSince $AB \\\\parallel CD$, the alternate interior angles are equal:\\n$$\\\\angle ABD = \\\\angle BDC = \\\\alpha$$\\n\\n3. **Apply the Sine Rule in $\\\\triangle ABD$:**\\nIn $\\\\triangle ABD$, the angles are $\\\\angle ADB = \\\\theta$ and $\\\\angle ABD = \\\\alpha$. The third angle is:\\n$$\\\\angle BAD = \\\\pi - (\\\\theta + \\\\alpha)$$\\nBy Sine Rule:\\n$$\\\\frac{AB}{\\\\sin\\\\theta} = \\\\frac{BD}{\\\\sin(\\\\angle BAD)} = \\\\frac{BD}{\\\\sin(\\\\pi - (\\\\theta + \\\\alpha))} = \\\\frac{BD}{\\\\sin(\\\\theta + \\\\alpha)}$$\\n$$AB = \\\\frac{BD \\\\cdot \\\\sin\\\\theta}{\\\\sin\\\\theta\\\\cos\\\\alpha + \\\\cos\\\\theta\\\\sin\\\\alpha}$$\\n\\n4. **Substitute the known trigonometric ratios:**\\n$$AB = \\\\frac{\\\\sqrt{p^2 + q^2} \\\\cdot \\\\sin\\\\theta}{\\\\sin\\\\theta \\\\left(\\\\frac{q}{\\\\sqrt{p^2+q^2}}\\\\right) + \\\\cos\\\\theta \\\\left(\\\\frac{p}{\\\\sqrt{p^2+q^2}}\\\\right)}$$\\nMultiply the numerator and denominator by $\\\\sqrt{p^2 + q^2}$:\\n$$AB = \\\\frac{(p^2 + q^2)\\\\sin\\\\theta}{q\\\\sin\\\\theta + p\\\\cos\\\\theta}$$"
    },
    {
      id: "trig-pyq-22",
      question: "The expression $\\\\frac{\\\\tan A}{1 - \\\\cot A} + \\\\frac{\\\\cot A}{1 - \\\\tan A}$ can be written as: (JEE M 2013)",
      options: [
        "$\\\\sin A\\\\cos A + 1$",
        "$\\\\sec A\\\\csc A + 1$",
        "$\\\\tan A + \\\\cot A$",
        "$\\\\sec A + \\\\csc A$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\\n\\n1. **Convert the expression to terms of $\\\\tan A$:**\\nSubstitute $\\\\cot A = \\\\frac{1}{\\\\tan A}$:\\n$$\\\\frac{\\\\tan A}{1 - \\\\frac{1}{\\\\tan A}} + \\\\frac{\\\\frac{1}{\\\\tan A}}{1 - \\\\tan A} = \\\\frac{\\\\tan^2 A}{\\\\tan A - 1} + \\\\frac{1}{\\\\tan A(1 - \\\\tan A)}$$\\n\\n2. **Combine fractions with a common denominator:**\\n$$= \\\\frac{\\\\tan^2 A}{\\\\tan A - 1} - \\\\frac{1}{\\\\tan A(\\\\tan A - 1)} = \\\\frac{\\\\tan^3 A - 1}{\\\\tan A(\\\\tan A - 1)}$$\\n\\n3. **Apply algebraic factorization $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$:**\\n$$= \\\\frac{(\\\\tan A - 1)(\\\\tan^2 A + \\\\tan A + 1)}{\\\\tan A(\\\\tan A - 1)} = \\\\frac{\\\\tan^2 A + \\\\tan A + 1}{\\\\tan A}$$\\n$$= \\\\tan A + 1 + \\\\cot A$$\\n\\n4. **Convert back to basic sine and cosine components:**\\n$$= \\\\frac{\\\\sin A}{\\\\cos A} + \\\\frac{\\\\cos A}{\\\\sin A} + 1 = \\\\frac{\\\\sin^2 A + \\\\cos^2 A}{\\\\sin A\\\\cos A} + 1$$\\n$$= \\\\frac{1}{\\\\sin A\\\\cos A} + 1 = \\\\sec A\\\\csc A + 1$$"
    },
    {
      id: "trig-pyq-23",
      question: "Let $f_k(x) = \\\\frac{1}{k}(\\\\sin^k x + \\\\cos^k x)$ where $x \\\\in \\\\mathbb{R}$ and $k \\\\geq 1$. Then $f_4(x) - f_6(x)$ equals: (JEE M 2014)",
      options: [
        "$\\\\frac{1}{4}$",
        "$\\\\frac{1}{12}$",
        "$\\\\frac{1}{6}$",
        "$\\\\frac{1}{3}$"
      ],
      answer: 1,
      explanation: "**Detailed Solution:**\\n\\n1. **Write out the targeted terms:**\\n$$f_4(x) - f_6(x) = \\\\frac{1}{4}(\\\\sin^4 x + \\\\cos^4 x) - \\\\frac{1}{6}(\\\\sin^6 x + \\\\cos^6 x)$$\\n\\n2. **Substitute standard identity reductions:**\\n* $\\\\sin^4 x + \\\\cos^4 x = (\\\\sin^2 x + \\\\cos^2 x)^2 - 2\\\\sin^2 x\\\\cos^2 x = 1 - 2\\\\sin^2 x\\\\cos^2 x$\\n* $\\\\sin^6 x + \\\\cos^6 x = (\\\\sin^2 x + \\\\cos^2 x)^3 - 3\\\\sin^2 x\\\\cos^2 x(\\\\sin^2 x + \\\\cos^2 x) = 1 - 3\\\\sin^2 x\\\\cos^2 x$\\n\\n3. **Expand and simplify algebraically:**\\n$$= \\\\frac{1}{4}(1 - 2\\\\sin^2 x\\\\cos^2 x) - \\\\frac{1}{6}(1 - 3\\\\sin^2 x\\\\cos^2 x)$$\\n$$= \\\\frac{1}{4} - \\\\frac{1}{2}\\\\sin^2 x\\\\cos^2 x - \\\\frac{1}{6} + \\\\frac{1}{2}\\\\sin^2 x\\\\cos^2 x$$\\nNotice that the variable terms cancel out completely:\\n$$= \\\\frac{1}{4} - \\\\frac{1}{6} = \\\\frac{3 - 2}{12} = \\\\frac{1}{12}$$"
    },
    {
      id: "trig-pyq-24",
      question: "If $0 \\\\leq x < 2\\\\pi$, then the number of real values of $x$, which satisfy the equation $\\\\cos x + \\\\cos 2x + \\\\cos 3x + \\\\cos 4x = 0$ is: (JEE M 2016)",
      options: [
        "7",
        "9",
        "3",
        "5"
      ],
      answer: 0,
      explanation: "**Detailed Solution:**\\n\\n1. **Group and rearrange the terms:**\\nGroup the outer terms and inner terms to apply sum-to-product identities:\\n$$(\\\\cos 4x + \\\\cos x) + (\\\\cos 3x + \\\\cos 2x) = 0$$\\n$$2\\\\cos\\\\left(\\\\frac{5x}{2}\\\\right)\\\\cos\\\\left(\\\\frac{3x}{2}\\\\right) + 2\\\\cos\\\\left(\\\\frac{5x}{2}\\\\right)\\\\cos\\\\left(\\\\frac{x}{2}\\\\right) = 0$$\\n\\n2. **Factor out the common term:**\\n$$2\\\\cos\\\\left(\\\\frac{5x}{2}\\\\right) \\\\left[ \\\\cos\\\\left(\\\\frac{3x}{2}\\\\right) + \\\\cos\\\\left(\\\\frac{x}{2}\\\\right) \\\\right] = 0$$\\nApply the sum-to-product identity once more to the inner expression:\\n$$2\\\\cos\\\\left(\\\\frac{5x}{2}\\\\right) \\\\left[ 2\\\\cos x \\\\cos\\\\left(\\\\frac{x}{2}\\\\right) \\\\right] = 0 \\\\implies 4\\\\cos\\\\left(\\\\frac{5x}{2}\\\\right)\\\\cos x\\\\cos\\\\left(\\\\frac{x}{2}\\\\right) = 0$$\\n\\n3. **Find roots within the interval $0 \\\\leq x < 2\\\\pi$:**\\n* **Case 1:** $\\\\cos x = 0 \\\\implies x = \\\\frac{\\\\pi}{2}, \\\\frac{3\\\\pi}{2}$ **(2 solutions)**\\n* **Case 2:** $\\\\cos\\\\left(\\\\frac{x}{2}\\\\right) = 0 \\\\implies \\\\frac{x}{2} = \\\\frac{\\\\pi}{2} \\\\implies x = \\\\pi$ **(1 solution)**\\n* **Case 3:** $\\\\cos\\\\left(\\\\frac{5x}{2}\\\\right) = 0 \\\\implies \\\\frac{5x}{2} = \\\\frac{\\\\pi}{2}, \\\\frac{3\\\\pi}{2}, \\\\frac{5\\\\pi}{2}, \\\\frac{7\\\\pi}{2}, \\\\frac{9\\\\pi}{2}$\\n  $$x = \\\\frac{\\\\pi}{5}, \\\\frac{3\\\\pi}{5}, \\\\pi, \\\\frac{7\\\\pi}{5}, \\\\frac{9\\\\pi}{5}$$\\n\\n4. **Count unique values:**\\nNotice that $x = \\\\pi$ overlaps between Case 2 and Case 3. Combining all distinct values:\\n$$x \\\\in \\\\left\\\\{ \\\\frac{\\\\pi}{5}, \\\\frac{3\\\\pi}{5}, \\\\frac{\\\\pi}{2}, \\\\pi, \\\\frac{7\\\\pi}{5}, \\\\frac{3\\\\pi}{2}, \\\\frac{9\\\\pi}{5} \\\\right\\\\}$$\\nThis gives a total of 7 unique real solutions."
    }
`;

const fileStr = fs.readFileSync('src/questions/maths/trigonometry/pyq.ts', 'utf8');

const updatedFileStr = fileStr.replace('    }\n  ]\n};', newQuestions + '\n  ]\n};');
fs.writeFileSync('src/questions/maths/trigonometry/pyq.ts', updatedFileStr);
