import { test } from '../qunit';
import { localeModule } from '../qunit-locale';
import moment from '../../moment';
localeModule('kz');

test('parse', function (assert) {
    var tests = 'قاڭتار قاڭتار_اقپان اقپان_ناۋرىز ناۋرىز_ءساۋىر ءساۋىر_مامىر مامىر_ماۋسىم ماۋسىم_شىلدە شىلدە_تامىز تامىز_قىركۇيەك قىركۇيەك_قازان قازان_قاراشا قاراشا_جەلتوقسان جەلتوقسان'.split(
            '_'
        ),
        i;
    function equalTest(input, mmm, i) {
        assert.equal(
            moment(input, mmm).month(),
            i,
            input + ' should be month ' + (i + 1)
        );
    }

    function equalTestStrict(input, mmm, monthIndex) {
        assert.equal(
            moment(input, mmm, true).month(),
            monthIndex,
            input + ' ' + mmm + ' should be strict month ' + (monthIndex + 1)
        );
    }

    for (i = 0; i < 12; i++) {
        tests[i] = tests[i].split(' ');
        equalTest(tests[i][0], 'MMM', i);
        equalTest(tests[i][1], 'MMM', i);
        equalTest(tests[i][0], 'MMMM', i);
        equalTest(tests[i][1], 'MMMM', i);
        equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);

        equalTestStrict(tests[i][1], 'MMM', i);
        equalTestStrict(tests[i][0], 'MMMM', i);
        equalTestStrict(tests[i][1].toLocaleLowerCase(), 'MMM', i);
        equalTestStrict(tests[i][1].toLocaleUpperCase(), 'MMM', i);
        equalTestStrict(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
        equalTestStrict(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
    }
});

test('format', function (assert) {
    var a = [
            [
                'dddd, YYYY MMMM Do, a h:mm:ss',
                'جەكسەنبى، 2010 اقپان 14-كۇنى، تۇستەن كەيىن 3:25:50',
            ],
            ['dddd, A h', 'جەكسەنبى، تۇستەن كەيىن 3'],
            ['M Mo MM MMMM MMM', '2 2 02 اقپان اقپان'],
            ['YYYY YY', '2010 10'],
            ['D Do DD', '14 14-كۇنى 14'],
            ['d do dddd ddd dd', '0 0-كۇنى جەكسەنبى جە جە'],
            ['DDD DDDo DDDD', '45 45-كۇنى 045'],
            ['w wo ww', '7 7-اپتا 07'],
            ['h hh', '3 03'],
            ['H HH', '15 15'],
            ['m mm', '25 25'],
            ['s ss', '50 50'],
            ['a A', 'تۇستەن كەيىن تۇستەن كەيىن'],
            ['[جىلدىڭ] DDDo', 'جىلدىڭ 45-كۇنى'],
            ['LTS', '15:25:50'],
            ['L', '2010-02-14'],
            ['LL', '2010-جىلى2-اينىڭ14-كۇنى'],
            ['LLL', '2010-جىلى2-اينىڭ14-كۇنى، 15:25'],
            ['LLLL', 'جەكسەنبى، 2010-جىلى2-اي14-كۇنى، 15:25'],
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;

    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test('format month', function (assert) {
    var expected = 'قاڭتار قاڭتار_اقپان اقپان_ناۋرىز ناۋرىز_ءساۋىر ءساۋىر_مامىر مامىر_ماۋسىم ماۋسىم_شىلدە شىلدە_تامىز تامىز_قىركۇيەك قىركۇيەك_قازان قازان_قاراشا قاراشا_جەلتوقسان جەلتوقسان'.split(
            '_'
        ),
        i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(
            moment([2011, i, 1]).format('MMMM MMM'),
            expected[i],
            expected[i]
        );
    }
});

test('format week', function (assert) {
    var expected = 'جەكسەنبى جە جە_دۇيسەنبى دۇ دۇ_سەيسەنبى سە سە_سارسەنبى سا سا_بەيسەنبى بە بە_جۇما جۇ جۇ_سەنبى سە سە'.split(
            '_'
        ),
        i;

    for (i = 0; i < expected.length; i++) {
        assert.equal(
            moment([2011, 0, 2 + i]).format('dddd ddd dd'),
            expected[i],
            expected[i]
        );
    }
});

test('from', function (assert) {
    var start = moment([2007, 1, 28]);
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ s: 44 }), true),
        'بىرنەشە سەكۋند',
        '44 seconds = a few seconds'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ s: 45 }), true),
        'ءبىر مىنۇت',
        '45 seconds = a minute'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ s: 89 }), true),
        'ءبىر مىنۇت',
        '89 seconds = a minute'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ s: 90 }), true),
        '2 مىنۇت',
        '90 seconds = 2 minutes'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ m: 44 }), true),
        '44 مىنۇت',
        '44 minutes = 44 minutes'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ m: 45 }), true),
        'ءبىر ساعات',
        '45 minutes = an hour'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ m: 89 }), true),
        'ءبىر ساعات',
        '89 minutes = an hour'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ m: 90 }), true),
        '2 ساعات',
        '90 minutes = 2 hours'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ h: 5 }), true),
        '5 ساعات',
        '5 hours = 5 hours'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ h: 21 }), true),
        '21 ساعات',
        '21 hours = 21 hours'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ h: 22 }), true),
        'ءبىر كۈن',
        '22 hours = a day'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ h: 35 }), true),
        'ءبىر كۈن',
        '35 hours = a day'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ h: 36 }), true),
        '2 كۈن',
        '36 hours = 2 days'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 1 }), true),
        'ءبىر كۈن',
        '1 day = a day'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 5 }), true),
        '5 كۈن',
        '5 days = 5 days'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 25 }), true),
        '25 كۈن',
        '25 days = 25 days'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 26 }), true),
        'ءبىر اي',
        '26 days = a month'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 30 }), true),
        'ءبىر اي',
        '30 days = a month'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 43 }), true),
        'ءبىر اي',
        '43 days = a month'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 46 }), true),
        '2 اي',
        '46 days = 2 months'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 74 }), true),
        '2 اي',
        '75 days = 2 months'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 76 }), true),
        '3 اي',
        '76 days = 3 months'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ M: 1 }), true),
        'ءبىر اي',
        '1 month = a month'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ M: 5 }), true),
        '5 اي',
        '5 months = 5 months'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 345 }), true),
        'ءبىر جىل',
        '345 days = a year'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ d: 548 }), true),
        '2 جىل',
        '548 days = 2 years'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ y: 1 }), true),
        'ءبىر جىل',
        '1 year = a year'
    );
    assert.equal(
        start.from(moment([2007, 1, 28]).add({ y: 5 }), true),
        '5 جىل',
        '5 years = 5 years'
    );
});

test('suffix', function (assert) {
    assert.equal(moment(30000).from(0), 'ءبىرنەشە سەكۋندتان كەيىن', 'prefix');
    assert.equal(moment(0).from(30000), 'ءبىرنەشە سەكۋند بۇرىن', 'suffix');
});

test('now from now', function (assert) {
    assert.equal(
        moment().fromNow(),
        'ءبىرنەشە سەكۋند بۇرىن',
        'now from now should display as in the past'
    );
});

test('fromNow', function (assert) {
    assert.equal(
        moment().add({ s: 30 }).fromNow(),
        'ءبىرنەشە سەكۋندتان كەيىن',
        'in a few seconds'
    );
    assert.equal(moment().add({ d: 5 }).fromNow(), '5 كۈن كېيىن', 'in 5 days');
});

test('calendar day', function (assert) {
    var a = moment().hours(12).minutes(0).seconds(0);

    assert.equal(
        moment(a).calendar(),
        'بۇگىن ساعات 12:00',
        'today at the same time'
    );
    assert.equal(
        moment(a).add({ m: 25 }).calendar(),
        'بۇگىن ساعات 12:25',
        'Now plus 25 min'
    );
    assert.equal(
        moment(a).add({ h: 1 }).calendar(),
        'بۇگىن ساعات 13:00',
        'Now plus 1 hour'
    );
    assert.equal(
        moment(a).add({ d: 1 }).calendar(),
        'ەرتەڭ ساعات 12:00',
        'tomorrow at the same time'
    );
    assert.equal(
        moment(a).subtract({ h: 1 }).calendar(),
        'بۇگىن ساعات 11:00',
        'Now minus 1 hour'
    );
    assert.equal(
        moment(a).subtract({ d: 1 }).calendar(),
        'كەشەگى 12:00',
        'yesterday at the same time'
    );
});

test('calendar next week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().add({ d: i });
        assert.equal(
            m.calendar(),
            m.format('[كەلەرگى] dddd [ساعات] LT'),
            'Today + ' + i + ' days current time'
        );
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(
            m.calendar(),
            m.format('[كەلەرگى] dddd [ساعات] LT'),
            'Today + ' + i + ' days beginning of day'
        );
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(
            m.calendar(),
            m.format('[كەلەرگى] dddd [ساعات] LT'),
            'Today + ' + i + ' days end of day'
        );
    }
});

test('calendar last week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().subtract({ d: i });
        assert.equal(
            m.calendar(),
            m.format('[الدىڭعى] dddd [ساعات] LT'),
            'Today - ' + i + ' days current time'
        );
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(
            m.calendar(),
            m.format('[الدىڭعى] dddd [ساعات] LT'),
            'Today - ' + i + ' days beginning of day'
        );
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(
            m.calendar(),
            m.format('[الدىڭعى] dddd [ساعات] LT'),
            'Today - ' + i + ' days end of day'
        );
    }
});

test('calendar all else', function (assert) {
    var weeksAgo = moment().subtract({ w: 1 }),
        weeksFromNow = moment().add({ w: 1 });

    assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '1 week ago');
    assert.equal(
        weeksFromNow.calendar(),
        weeksFromNow.format('L'),
        'in 1 week'
    );

    weeksAgo = moment().subtract({ w: 2 });
    weeksFromNow = moment().add({ w: 2 });

    assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '2 weeks ago');
    assert.equal(
        weeksFromNow.calendar(),
        weeksFromNow.format('L'),
        'in 2 weeks'
    );
});

test('meridiem', function (assert) {
    assert.equal(
        moment([2011, 2, 23, 0, 0]).format('A'),
        'ءتۇن ورتاسى',
        'before dawn'
    );
    assert.equal(moment([2011, 2, 23, 6, 0]).format('A'), 'سەھەر', 'morning');
    assert.equal(
        moment([2011, 2, 23, 9, 0]).format('A'),
        'تۇستەن بۇرىن',
        'before noon'
    );
    assert.equal(moment([2011, 2, 23, 12, 0]).format('A'), 'ءتۇس', 'noon');
    assert.equal(
        moment([2011, 2, 23, 13, 0]).format('A'),
        'تۇستەن كەيىن',
        'afternoon'
    );
    assert.equal(moment([2011, 2, 23, 18, 0]).format('A'), 'كەش', 'night');
});

test('weeks year starting sunday format', function (assert) {
    assert.equal(
        moment([2011, 11, 26]).format('w ww wo'),
        '1 01 1-اپتا',
        'Dec 26 2011 should be week 1'
    );
    assert.equal(
        moment([2012, 0, 1]).format('w ww wo'),
        '1 01 1-اپتا',
        'Jan  1 2012 should be week 1'
    );
    assert.equal(
        moment([2012, 0, 2]).format('w ww wo'),
        '2 02 2-اپتا',
        'Jan  2 2012 should be week 2'
    );
    assert.equal(
        moment([2012, 0, 8]).format('w ww wo'),
        '2 02 2-اپتا',
        'Jan  8 2012 should be week 2'
    );
    assert.equal(
        moment([2012, 0, 9]).format('w ww wo'),
        '3 03 3-اپتا',
        'Jan  9 2012 should be week 3'
    );
});
