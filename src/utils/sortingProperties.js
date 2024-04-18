
const sortingProperties = (Properties, filterBy = 'Highest Price') => {

    if (filterBy === 'Lowest Price') {
        return Properties.properties.sort((a, b) => {
            return a.price - b.price;
        });
    }

    else if (filterBy === 'Oldest Listed') {
        return Properties.properties.sort((a, b) => {
            return new Date (a.timeUploaded.split(' at ')[0]) - new Date (b.timeUploaded.split(' at ')[0]);
        });
    }

    else if (filterBy === 'Newest Listed') {
        return Properties.properties.sort((a, b) => {
            return new Date (b.timeUploaded.split(' at ')[0]) - new Date (a.timeUploaded.split(' at ')[0]);
        });
    }

    else {
        return Properties.properties.sort((a, b) => {
            return b.price - a.price;
        });
    };

};

export default sortingProperties;