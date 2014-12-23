﻿/* jshint -W100 */

var moment = require('../../moment');


    /**************************************************
      Sinhala
     *************************************************/

exports['locale:si'] = {
    setUp : function (cb) {
        moment.locale('si');
        moment.createFromInputFallback = function () {
            throw new Error('input not handled by moment');
        };
        cb();
    },

    tearDown : function (cb) {
        moment.locale('si');
        cb();
    },

    'parse' : function (test) {
        var tests = 'ජනවාරි ජන_පෙබරවාරි පෙබ_මාර්තු මාර්_අප්‍රේල් අප්_මැයි මැයි_ජූනි ජූනි_ජූලි ජූලි_අගෝස්තු අගෝ_සැප්තැම්බර් සැප්_ඔක්තෝබර් ඔක්_නොවැම්බර් නොවැ_දෙසැම්බර් දෙසැ'.split('_'), i;
        function equalTest(input, mmm, i) {
            test.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
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
        }
        test.done();
    },

    'format' : function (test) {
        var a = [
                ['YYYY MMMM Do dddd, a h:mm:ss',       '2010 පෙබරවාරි 14 වැනි ඉරිදා, ප.ව. 3:25:50'],
                ['YYYY MMMM Do dddd, a h:mm:ss',       '2010 පෙබරවාරි 14 වැනි ඉරිදා, ප.ව. 3:25:50'],
                ['ddd, A h',                            'ඉරි, පස් වරු 3'],
                ['M Mo MM MMMM MMM',                   '2 2 වැනි 02 පෙබරවාරි පෙබ'],
                ['YYYY YY',                            '2010 10'],
                ['D Do DD',                            '14 14 වැනි 14'],
                ['d do dddd ddd dd',                   '0 0 වැනි ඉරිදා ඉරි ඉ'],
                ['DDD DDDo DDDD',                      '45 45 වැනි 045'],
                ['h hh',                               '3 03'],
                ['H HH',                               '15 15'],
                ['m mm',                               '25 25'],
                ['s ss',                               '50 50'],
                ['a A',                                'ප.ව. පස් වරු'],
                ['[වසරේ] DDDo [දිනය]',                      'වසරේ 45 වැනි දිනය'],
                ['LTS',                                'ප.ව. 3:25:50'],
                ['LT',                                 'ප.ව. 3:25'],
                ['L',                                  '2010/02/14'],
                ['LL',                                 '2010 පෙබරවාරි 14'],
                ['LLL',                                '2010 පෙබරවාරි 14, ප.ව. 3:25'],
                ['LLLL',                               '2010 පෙබරවාරි 14 වැනි ඉරිදා, ප.ව. 3:25:50'],
                ['l',                                  '2010/2/14'],
                ['ll',                                 '2010 පෙබ 14'],
                ['lll',                                '2010 පෙබ 14, ප.ව. 3:25'],
                ['llll',                               '2010 පෙබ 14 වැනි ඉරි, ප.ව. 3:25:50']
            ],
            b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
            i;
        for (i = 0; i < a.length; i++) {
            test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
        test.done();
    },

    'format ordinal' : function (test) {
        test.equal(moment([2011, 0, 1]).format('DDDo'), '1 වැනි', '1 වැනි');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '2 වැනි', '2 වැනි');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '3 වැනි', '3 වැනි');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '4 වැනි', '4 වැනි');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '5 වැනි', '5 වැනි');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '6 වැනි', '6 වැනි');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '7 වැනි', '7 වැනි');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '8 වැනි', '8 වැනි');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '9 වැනි', '9 වැනි');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '10 වැනි', '10 වැනි');

        test.equal(moment([2011, 0, 11]).format('DDDo'), '11 වැනි', '11 වැනි');
        test.equal(moment([2011, 0, 12]).format('DDDo'), '12 වැනි', '12 වැනි');
        test.equal(moment([2011, 0, 13]).format('DDDo'), '13 වැනි', '13 වැනි');
        test.equal(moment([2011, 0, 14]).format('DDDo'), '14 වැනි', '14 වැනි');
        test.equal(moment([2011, 0, 15]).format('DDDo'), '15 වැනි', '15 වැනි');
        test.equal(moment([2011, 0, 16]).format('DDDo'), '16 වැනි', '16 වැනි');
        test.equal(moment([2011, 0, 17]).format('DDDo'), '17 වැනි', '17 වැනි');
        test.equal(moment([2011, 0, 18]).format('DDDo'), '18 වැනි', '18 වැනි');
        test.equal(moment([2011, 0, 19]).format('DDDo'), '19 වැනි', '19 වැනි');
        test.equal(moment([2011, 0, 20]).format('DDDo'), '20 වැනි', '20 වැනි');

        test.equal(moment([2011, 0, 21]).format('DDDo'), '21 වැනි', '21 වැනි');
        test.equal(moment([2011, 0, 22]).format('DDDo'), '22 වැනි', '22 වැනි');
        test.equal(moment([2011, 0, 23]).format('DDDo'), '23 වැනි', '23 වැනි');
        test.equal(moment([2011, 0, 24]).format('DDDo'), '24 වැනි', '24 වැනි');
        test.equal(moment([2011, 0, 25]).format('DDDo'), '25 වැනි', '25 වැනි');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '26 වැනි', '26 වැනි');
        test.equal(moment([2011, 0, 27]).format('DDDo'), '27 වැනි', '27 වැනි');
        test.equal(moment([2011, 0, 28]).format('DDDo'), '28 වැනි', '28 වැනි');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '29 වැනි', '29 වැනි');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '30 වැනි', '30 වැනි');

        test.equal(moment([2011, 0, 31]).format('DDDo'), '31 වැනි', '31 වැනි');
        test.done();
    },

    'format month' : function (test) {
        var expected = 'ජනවාරි ජන_පෙබරවාරි පෙබ_මාර්තු මාර්_අප්‍රේල් අප්_මැයි මැයි_ජූනි ජූනි_ජූලි ජූලි_අගෝස්තු අගෝ_සැප්තැම්බර් සැප්_ඔක්තෝබර් ඔක්_නොවැම්බර් නොවැ_දෙසැම්බර් දෙසැ'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    'format week' : function (test) {
        var expected = 'ඉරිදා ඉරි ඉ_සඳුදා සඳු ස_අඟහරුවාදා අඟ අ_බදාදා බදා බ_බ්‍රහස්පතින්දා බ්‍රහ බ්‍ර_සිකුරාදා සිකු සි_සෙනසුරාදා සෙන සෙ'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    'from' : function (test) {
        var start = moment([2007, 1, 28]);
        test.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  'තත්පර කිහිපය', '44 seconds = a few seconds');
        test.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  'මිනිත්තුව',      '45 seconds = a minute');
        test.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  'මිනිත්තුව',      '89 seconds = a minute');
        test.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  'මිනිත්තු 2',     '90 seconds = 2 minutes');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  'මිනිත්තු 44',    '44 minutes = 44 minutes');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  'පැය',       '45 minutes = an hour');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  'පැය',       '89 minutes = an hour');
        test.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  'පැය 2',       '90 minutes = 2 hours');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   'පැය 5',       '5 hours = 5 hours');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  'පැය 21',      '21 hours = 21 hours');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  'දිනය',         '22 hours = a day');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  'දිනය',         '35 hours = a day');
        test.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  'දින 2',        '36 hours = 2 days');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   'දිනය',         '1 day = a day');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   'දින 5',        '5 days = 5 days');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  'දින 25',       '25 days = 25 days');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  'මාසය',       '26 days = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  'මාසය',       '30 days = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true),  'මාසය',       '43 days = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  'මාස 2',      '46 days = 2 months');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  'මාස 2',      '75 days = 2 months');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  'මාස 3',      '76 days = 3 months');
        test.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   'මාසය',       '1 month = a month');
        test.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   'මාස 5',      '5 months = 5 months');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'වසර',        '345 days = a year');
        test.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), 'වසර 2',       '548 days = 2 years');
        test.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   'වසර',        '1 year = a year');
        test.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   'වසර 5',       '5 years = 5 years');
        test.done();
    },

    'suffix' : function (test) {
        test.equal(moment(30000).from(0), 'තත්පර කිහිපයකින්',  'prefix');
        test.equal(moment(0).from(30000), 'තත්පර කිහිපයකට පෙර', 'suffix');
        test.done();
    },

    'now from now' : function (test) {
        test.equal(moment().fromNow(), 'තත්පර කිහිපයකට පෙර',  'now from now should display as in the past');
        test.done();
    },

    'fromNow' : function (test) {
        test.equal(moment().add({s: 30}).fromNow(), 'තත්පර කිහිපයකින්', 'in a few seconds');
        test.equal(moment().add({d: 5}).fromNow(), 'දින 5කින්', 'in 5 days');
        test.done();
    },

    'calendar day' : function (test) {
        var a = moment().hours(2).minutes(0).seconds(0);

        test.equal(moment(a).calendar(),                   'අද පෙ.ව. 2:00ට',      'today at the same time');
        test.equal(moment(a).add({m: 25}).calendar(),      'අද පෙ.ව. 2:25ට',      'Now plus 25 min');
        test.equal(moment(a).add({h: 1}).calendar(),       'අද පෙ.ව. 3:00ට',      'Now plus 1 hour');
        test.equal(moment(a).add({d: 1}).calendar(),       'හෙට පෙ.ව. 2:00ට',   'tomorrow at the same time');
        test.equal(moment(a).subtract({h: 1}).calendar(),  'අද පෙ.ව. 1:00ට',      'Now minus 1 hour');
        test.equal(moment(a).subtract({d: 1}).calendar(),  'ඊයේ පෙ.ව. 2:00ට',  'yesterday at the same time');
        test.done();
    },

    'calendar next week' : function (test) {
        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().add({d: i});
            test.equal(m.calendar(),       m.format('dddd LT[ට]'),  'Today + ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('dddd LT[ට]'),  'Today + ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('dddd LT[ට]'),  'Today + ' + i + ' days end of day');
        }
        test.done();
    },

    'calendar last week' : function (test) {
        var i, m;

        for (i = 2; i < 7; i++) {
            m = moment().subtract({d: i});
            test.equal(m.calendar(),       m.format('[පසුගිය] dddd LT[ට]'),  'Today - ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('[පසුගිය] dddd LT[ට]'),  'Today - ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('[පසුගිය] dddd LT[ට]'),  'Today - ' + i + ' days end of day');
        }
        test.done();
    },

    'calendar all else' : function (test) {
        var weeksAgo = moment().subtract({w: 1}),
            weeksFromNow = moment().add({w: 1});

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '1 week ago');
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 1 week');

        weeksAgo = moment().subtract({w: 2});
        weeksFromNow = moment().add({w: 2});

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '2 weeks ago');
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 2 weeks');

        test.done();
    },

    'lenient ordinal parsing' : function (test) {
        var i, ordinalStr, testMoment;
        for (i = 1; i <= 31; ++i) {
            ordinalStr = moment([2014, 0, i]).format('YYYY MM Do');
            testMoment = moment(ordinalStr, 'YYYY MM Do');
            test.equal(testMoment.year(), 2014,
                    'lenient ordinal parsing ' + i + ' year check');
            test.equal(testMoment.month(), 0,
                    'lenient ordinal parsing ' + i + ' month check');
            test.equal(testMoment.date(), i,
                    'lenient ordinal parsing ' + i + ' date check');
        }
        test.done();
    },

    'lenient ordinal parsing of number' : function (test) {
        var i, testMoment;
        for (i = 1; i <= 31; ++i) {
            testMoment = moment('2014 01 ' + i, 'YYYY MM Do');
            test.equal(testMoment.year(), 2014,
                    'lenient ordinal parsing of number ' + i + ' year check');
            test.equal(testMoment.month(), 0,
                    'lenient ordinal parsing of number ' + i + ' month check');
            test.equal(testMoment.date(), i,
                    'lenient ordinal parsing of number ' + i + ' date check');
        }
        test.done();
    },

    'strict ordinal parsing' : function (test) {
        var i, ordinalStr, testMoment;
        for (i = 1; i <= 31; ++i) {
            ordinalStr = moment([2014, 0, i]).format('YYYY MM Do');
            testMoment = moment(ordinalStr, 'YYYY MM Do', true);
            test.ok(testMoment.isValid(), 'strict ordinal parsing ' + i);
        }
        test.done();
    }
};
