const precedence = operator => {
    switch (operator) {
        case "*":
        case "/":
            return 2;
        case "+":
        case "-":
            return 1;
    }

    return -1;
}

export const infixToPostfix = expression => {
    let stack = [];
    let result = "";
    let tokens = expression.split(" ");

    for (const token of tokens) {
        if (!isNaN(token)) {
            result += token + " ";
        } else if (token === "(") {
            stack.push("(");
        } else if (token === ")") {
            while (stack[stack.length - 1] !== "(") {
                result += stack[stack.length - 1] + " ";
                stack.pop();
            }

            stack.pop();
        } else {
            while (stack.length !== 0 && precedence(token) <= precedence(stack[stack.length - 1])) {
                result += stack[stack.length - 1] + " ";
                stack.pop();
            }

            stack.push(token);
        }
    }

    while (stack.length !== 0) {
        result += stack[stack.length - 1];
        stack.pop();
    }

    return result;
}

export const calculatePostFix = postfix => {
    let stack = [];
    let val1 = 0;
    let val2 = 0;
    let tokens = postfix.split(" ");

    for (const token of tokens) {
        if (!isNaN(token)) {
            if (token.includes(".")) {
                stack.push(parseFloat(token));
            } else {
                stack.push(parseInt(token));
            }
        } else {
            val1 = stack.pop();
            val2 = stack.pop();

            switch (token) {
                case "+":
                    stack.push(val2 + val1);
                    break;
                case "-":
                    stack.push(val2 - val1);
                    break;
                case "/":
                    stack.push(val2 / val1);
                    break;
                case "*":
                    stack.push(val2 * val1);
                    break;
            }
        }
    }

    return stack.pop();
}