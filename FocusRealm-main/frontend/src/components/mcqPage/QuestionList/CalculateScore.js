export function calculateADHDTestScore(answers) {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
        const answerIndex = answers[i];
        const optionScore =
            answerIndex === 'Never'
                ? 0
                : answerIndex === 'Rarely'
                ? 1
                : answerIndex === 'Often'
                ? 2
                : answerIndex === 'Very Often'
                ? 3
                : 0;
        score += optionScore;
    }
    return Math.floor((score * 100) / 54);
}

export function interpretADHDTestScore(score) {
    if (score >= 0 && score <= 27) {
        return 'No significant symptoms of ADHD';
    } else if (score >= 28 && score <= 45) {
        return 'Mild to moderate symptoms of ADHD';
    } else if (score >= 46 && score <= 63) {
        return 'Moderate to severe symptoms of ADHD';
    } else {
        return 'Severe symptoms of ADHD';
    }
}
