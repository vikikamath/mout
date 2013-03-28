define(['../random/randInt', './forEach'], function (randInt, forEach) {

    /**
     * Shuffle array items.
     */
    function shuffle(arr) {
        var results = [],
            rnd;
        if (arr == null) {
            return results;
        }

        var i = -1, l = arr.length, value;
        while (++i < l) {
            if (!i) {
                results[0] = arr[0];
            } else {
                rnd = randInt(0, i);
                results[i] = results[rnd];
                results[rnd] = arr[i];
            }
        }

        return results;
    }

    return shuffle;
});
