const checkQuery = (query) => {
    const queryArr =  query.split(' ');
    let returnWord;

    queryArr.forEach(word => {
        let splitQueryWord = word.split('');
        const firstLetter = splitQueryWord.shift().toUpperCase();
        splitQueryWord.join();
        splitQueryWord = splitQueryWord.join('');
        returnWord = firstLetter + splitQueryWord;
    });

    return returnWord;
}

export default checkQuery;