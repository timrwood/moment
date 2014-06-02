var moment = require("../../moment");


    /**************************************************
      Myanmar Burmese
     *************************************************/

exports["lang:mm"] = {
    setUp : function (cb) {
        moment.lang('mm');
        moment.createFromInputFallback = function () {
            throw new Error("input not handled by moment");
        };
        cb();
    },

    tearDown : function (cb) {
        moment.lang('en');
        cb();
    },

    "parse" : function (test) {
        test.expect(96);
        var tests = 'ဇန္နဝါရီ ဇန္_ေဖေဖာ္ဝါရီ ေဖ_မတ္ မတ္_ဧျပီ ျပီ_ေမ ေမ_ဇြန္ ဇြန္_ဇူလိုင္ လိုင္_ၾသဂုတ္ ၾသ_စက္တင္ဘာ စက္_ေအာက္တိုဘာ ေအာက္_ႏိုဝင္ဘာ ႏို_ဒီဇင္ဘာ ဒီ'.split("_"), i;
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

    "format" : function (test) {
        test.expect(22);
        var a = [
                ['dddd, MMMM Do YYYY, h:mm:ss a',      'တနဂၤေႏြ၊ ေဖေဖာ္ဝါရီ ၁၄ ၂၀၁၀၊ ၃: ၂၅: ၅၀ ညေန'],
                ['ddd, hA',                            'ေႏြ, ညေန ၃နာရီ'],
                ['M Mo MM MMMM MMM',                   '၂ ၂ ၀၂ ေဖေဖာ္ဝါရီ ေဖ'],
                ['YYYY YY',                            '၂၀၁၀ ၁၀'],
                ['D Do DD',                            '၁၄ ၁၄ ၁၄'],
                ['d do dddd ddd dd',                   '၀ ၀ တနဂၤေႏြ ေႏြ ေႏြ'],
                ['DDD DDDo DDDD',                      '၄၅ ၄၅ ၀၄၅'],
                ['w wo ww',                            '၆ ၆ ၀၆'],
                ['h hh',                               '၃ ၀၃'],
                ['H HH',                               '၁၅ ၁၅'],
                ['m mm',                               '၂၅ ၂၅'],
                ['s ss',                               '၅၀ ၅၀'],
                ['a A',                                'ညေန ညေန'],
                ['[the] DDDo [day of the year]',       'ႏွစ္ တစ္ႏွစ္ ရဲ႕ ၄၅ ရက္ေျမာက္'],
                ['L',                                  '၁၄၊၀၂၊၂၀၁၀'],
                ['LL',                                 '၁၄ ေဖေဖာ္ဝါရီ ၂၀၁၀'],
                ['LLL',                                'ေဖေဖာ္ဝါရီ ၂၀၁၀ ၁၅း၂၅'],
                ['LLLL',                               'တနဂၤေႏြ၊ ေဖေဖာ္ဝါရီ ၁၄ ၂၀၁၀ ၁၅း ၂၅'],
                ['l',                                  '၁၄၊၂၊၂၀၁၀'],
                ['ll',                                 '၁၄ ေဖ ၂၀၁၀'],
                ['lll',                                '၁၄ ေဖ ၂၀၁၀ ၁၅း၂၅'],
                ['llll',                               'ေႏြ ၁၄၊ ေဖ ၂၀၁၀ ၁၅း၂၅']
            ],
            b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
            i;
        for (i = 0; i < a.length; i++) {
            test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
        test.done();
    },

    "format ordinal" : function (test) {
        test.expect(31);
        test.equal(moment([2011, 0, 1]).format('DDDo'), '၁', '၁');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '၂', '၂');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '၃', '၃');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '၄', '၄');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '၅', '၅');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '၆', '၆');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '၇', '၇');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '၈', '၈');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '၉', '၉');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '၁၀', '၁၀');

        test.equal(moment([2011, 0, 11]).format('DDDo'), '၁၁', '၁၁');
        test.equal(moment([2011, 0, 12]).format('DDDo'), '၁၂', '၁၂');
        test.equal(moment([2011, 0, 13]).format('DDDo'), '၁၃', '၁၃');
        test.equal(moment([2011, 0, 14]).format('DDDo'), '၁၄', '၁၄');
        test.equal(moment([2011, 0, 15]).format('DDDo'), '၁၅', '၁၅');
        test.equal(moment([2011, 0, 16]).format('DDDo'), '၁၆', '၁၆');
        test.equal(moment([2011, 0, 17]).format('DDDo'), '၁၇', '၁၇');
        test.equal(moment([2011, 0, 18]).format('DDDo'), '၁၈', '၁၈');
        test.equal(moment([2011, 0, 19]).format('DDDo'), '၁၉', '၁၉');
        test.equal(moment([2011, 0, 20]).format('DDDo'), '၂၀', '၂၀');

        test.equal(moment([2011, 0, 21]).format('DDDo'), '၂၁', '၂၁');
        test.equal(moment([2011, 0, 22]).format('DDDo'), '၂၂', '၂၂');
        test.equal(moment([2011, 0, 23]).format('DDDo'), '၂၃', '၂၃');
        test.equal(moment([2011, 0, 24]).format('DDDo'), '၂၄', '၂၄');
        test.equal(moment([2011, 0, 25]).format('DDDo'), '၂၅', '၂၅');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '၂၆', '၂၆');
        test.equal(moment([2011, 0, 27]).format('DDDo'), '၂၇', '၂၇');
        test.equal(moment([2011, 0, 28]).format('DDDo'), '၂၈', '၂၈');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '၂၉', '၂၉');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '၃၀', '၃၀');

        test.equal(moment([2011, 0, 31]).format('DDDo'), '၃၁', '၃၁');
        test.done();
    },

    "format month" : function (test) {
        test.expect(12);
        var expected = 'ဇန္နဝါရီ ဇန္_ေဖေဖာ္ဝါရီ ေဖ_မတ္ မတ္_ဧျပီ ျပီ_ေမ ေမ_ဇြန္ ဇြန္_ဇူလိုင္ လိုင္_ၾသဂုတ္ ၾသ_စက္တင္ဘာ စက္_ေအာက္တိုဘာ ေအာက္_ႏိုဝင္ဘာ ႏို_ဒီဇင္ဘာ ဒီ'.split("_"),i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    "format week" : function (test) {
        test.expect(7);
        var expected = 'တနဂၤေႏြ ေႏြ ေႏြ_တနလာၤ လာ လာ_အဂၤါ ဂါ ဂါ_ဗုဒၶဟူးေန႔ ဟူး ဟူး_ၾကာသပေတး ေတး ေတး_ေသာၾကာ ေသာ ေသာ_စေန ေန ေန'.split("_"), i;

        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    "from" : function (test) {
        test.expect(30);
        var start = moment([2007, 1, 28]);
     test.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  "စကၠန္႔အနည္းငယ္က", "၄၄ = စကၠန္႔အနည္းငယ္က");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  "တစ္မိနစ္",      "၄၅ စကၠန္႔ = တစ္မိနစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  "တစ္မိနစ္",      "၈၉ စကၠန္႔ = တစ္မိနစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  "၂ မိနစ္",     "၉၀ စကၠန္႔ =  ၂ မိနစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  "၄၄ မိနစ္",    "၄၄ မိနစ္ = ၄၄ မိနစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  "တစ္နာရီ",       "၄၅ မိနစ္ = ၁ နာရီ");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  "တစ္နာရီ",       "၈၉ မိနစ္ = တစ္နာရီ");
        test.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  "၂ နာရီ",       "မိနစ္ ၉၀= ၂ နာရီ");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   "၅ နာရီ",       "၅ နာရီ= ၅ နာရီ");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  "၂၁ နာရီ",      "၂၁ နာရီ =၂၁ နာရီ");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  "တစ္ရက္",         "၂၂ နာရီ =တစ္ရက္");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  "တစ္ရက္",         "၃၅ နာရီ =တစ္ရက္");
        test.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  "၂ ရက္",        "၃၆ နာရီ = ၂ ရက္");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   "တစ္ရက္",         "၁ ရက္= တစ္ရက္");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   "၅ ရက္",        "၅ ရက္ = ၅ ရက္");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  "၂၅ ရက္",       "၂၅ ရက္= ၂၅ ရက္");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  "တစ္လ",       "၂၆ ရက္ = တစ္လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  "တစ္လ",       "ရက္ ၃၀ = တစ္လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 45}), true),  "တစ္လ",       "၄၅ ရက္ = တစ္လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  "၂ လ",      "၄၆ ရက္ = ၂ လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  "၂ လ",      "၇၅ ရက္= ၂ လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  "၃ လ",      "၇၆ ရက္ = ၃ လ");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   "တစ္လ",       "၁ လ = တစ္လ");
        test.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   "၅ လ",      "၅ လ = ၅ လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 344}), true), "၁၁ လ",     "၃၄၄ ရက္ = ၁၁ လ");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), "တစ္ႏွစ္",        "၃၄၅ ရက္ = တစ္ႏွစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 547}), true), "တစ္ႏွစ္",        "၅၇၄ ရက္ = တစ္ႏွစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), "၂ ႏွစ္",       "၅၄၈ ရက္ = ၂ ႏွစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   "တစ္ႏွစ္",        "၁ ႏွစ္ = တစ္ႏွစ္");
        test.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   "၅ ႏွစ္",       "၅ ႏွစ္ = ၅ ႏွစ္");
        test.done();
    },

    "suffix" : function (test) {
        test.expect(2);
        test.equal(moment(30000).from(0), "စကၠန္႔အနည္းငယ္အတြင္း",  "prefix");
        test.equal(moment(0).from(30000), "လြန္ခဲ့ေသာစကၠန္႔အနည္းငယ္က", "suffix");
        test.done();
    },

    "now from now" : function (test) {
        test.expect(1);
        test.equal(moment().fromNow(), "လြန္ခဲ့ေသာစကၠန္႔အနည္းငယ္က",  "ယခုမွစျပီး အတိတ္တြင္ေဖာ္ျပသလိုေဖာ္ျပမည္");
        test.done();
    },

    "fromNow" : function (test) {
        test.expect(2);
        test.equal(moment().add({s: 30}).fromNow(), "စကၠန္႔အနည္းငယ္အတြင္း", "စကၠန္႔အနည္းငယ္အတြင္း");
        test.equal(moment().add({d: 5}).fromNow(), "၅ ရက္တြင္", "၅ ရက္တြင္");
        test.done();
    },

    "calendar day" : function (test) {
        test.expect(6);

        var a = moment().hours(2).minutes(0).seconds(0);

        test.equal(moment(a).calendar(),                     "ယေန႔ ၀၂ : ၀၀ တြင္",      "ယေန႔ အခ်ိန္တူတူတြင္");
        test.equal(moment(a).add({ m: 25 }).calendar(),      "ယေန႔ ၀၂ : ၂၅ တြင္",      "ယခုမွ ၂၅ မိနစ္ေပါင္းထည့္");
        test.equal(moment(a).add({ h: 1 }).calendar(),       "ယေန႔ ၀၃ : ၀၀ တြင္",      "ယခုမွ ၁ နာရီေပါင္းထည့္");
        test.equal(moment(a).add({ d: 1 }).calendar(),       "မနက္ျဖန္ ၀၂ : ၀၀ တြင္",   "မနက္ျဖန္ အခ်ိန္ အတူတူတြင္");
        test.equal(moment(a).subtract({ h: 1 }).calendar(),  "ယေန႔ ၀၁ : ၀၀ တြင္",      "၁ နာရီ ယခုမိနစ္");
        test.equal(moment(a).subtract({ d: 1 }).calendar(),  "မေန႔က ၀၂:၀၀ တြင္",  "မေန႔က အခ်ိန္အတူတူတြင္");
        test.done();
    },

    "calendar next week" : function (test) {
        test.expect(15);

        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().add({ d: i });
            test.equal(m.calendar(),       m.format('dddd [at] LT'),  "Today + " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('dddd [at] LT'),  "Today + " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('dddd [at] LT'),  "Today + " + i + " days end of day");
        }
        test.done();
    },

    "calendar last week" : function (test) {
        test.expect(15);

        var i, m;

        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            test.equal(m.calendar(),       m.format('[Last] dddd [at] LT'),  "Today - " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('[Last] dddd [at] LT'),  "Today - " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('[Last] dddd [at] LT'),  "Today - " + i + " days end of day");
        }
        test.done();
    },

    "calendar all else" : function (test) {
        test.expect(4);

        var weeksAgo = moment().subtract({ w: 1 }),
            weeksFromNow = moment().add({ w: 1 });

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "လြန္ခဲ့ေသာ ၁ ပတ္က");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "၁ ပတ္အတြင္း");

        weeksAgo = moment().subtract({ w: 2 });
        weeksFromNow = moment().add({ w: 2 });

        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "၂ ပတ္ အရင္က");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "၂ ပတ္ အတြင္း");

        test.done();
    },

    // Monday is the first day of the week.
    // The week that contains Jan 4th is the first week of the year.

    "weeks year starting sunday" : function (test) {
        test.expect(5);

        test.equal(moment([2012, 0, 1]).week(), 52, "Jan  1 2012 should be week 52");
        test.equal(moment([2012, 0, 2]).week(),  1, "Jan  2 2012 should be week 1");
        test.equal(moment([2012, 0, 8]).week(),  1, "Jan  8 2012 should be week 1");
        test.equal(moment([2012, 0, 9]).week(),  2, "Jan  9 2012 should be week 2");
        test.equal(moment([2012, 0, 15]).week(), 2, "Jan 15 2012 should be week 2");

        test.done();
    },

    "weeks year starting monday" : function (test) {
        test.expect(5);

        test.equal(moment([2007, 0, 1]).week(),  1, "Jan  1 2007 should be week 1");
        test.equal(moment([2007, 0, 7]).week(),  1, "Jan  7 2007 should be week 1");
        test.equal(moment([2007, 0, 8]).week(),  2, "Jan  8 2007 should be week 2");
        test.equal(moment([2007, 0, 14]).week(), 2, "Jan 14 2007 should be week 2");
        test.equal(moment([2007, 0, 15]).week(), 3, "Jan 15 2007 should be week 3");

        test.done();
    },

    "weeks year starting tuesday" : function (test) {
        test.expect(6);

        test.equal(moment([2007, 11, 31]).week(), 1, "Dec 31 2007 should be week 1");
        test.equal(moment([2008,  0,  1]).week(), 1, "Jan  1 2008 should be week 1");
        test.equal(moment([2008,  0,  6]).week(), 1, "Jan  6 2008 should be week 1");
        test.equal(moment([2008,  0,  7]).week(), 2, "Jan  7 2008 should be week 2");
        test.equal(moment([2008,  0, 13]).week(), 2, "Jan 13 2008 should be week 2");
        test.equal(moment([2008,  0, 14]).week(), 3, "Jan 14 2008 should be week 3");

        test.done();
    },

    "weeks year starting wednesday" : function (test) {
        test.expect(6);

        test.equal(moment([2002, 11, 30]).week(), 1, "Dec 30 2002 should be week 1");
        test.equal(moment([2003,  0,  1]).week(), 1, "Jan  1 2003 should be week 1");
        test.equal(moment([2003,  0,  5]).week(), 1, "Jan  5 2003 should be week 1");
        test.equal(moment([2003,  0,  6]).week(), 2, "Jan  6 2003 should be week 2");
        test.equal(moment([2003,  0, 12]).week(), 2, "Jan 12 2003 should be week 2");
        test.equal(moment([2003,  0, 13]).week(), 3, "Jan 13 2003 should be week 3");

        test.done();
    },

    "weeks year starting thursday" : function (test) {
        test.expect(6);

        test.equal(moment([2008, 11, 29]).week(), 1, "Dec 29 2008 should be week 1");
        test.equal(moment([2009,  0,  1]).week(), 1, "Jan  1 2009 should be week 1");
        test.equal(moment([2009,  0,  4]).week(), 1, "Jan  4 2009 should be week 1");
        test.equal(moment([2009,  0,  5]).week(), 2, "Jan  5 2009 should be week 2");
        test.equal(moment([2009,  0, 11]).week(), 2, "Jan 11 2009 should be week 2");
        test.equal(moment([2009,  0, 13]).week(), 3, "Jan 12 2009 should be week 3");

        test.done();
    },

    "weeks year starting friday" : function (test) {
        test.expect(6);

        test.equal(moment([2009, 11, 28]).week(), 53, "Dec 28 2009 should be week 53");
        test.equal(moment([2010,  0,  1]).week(), 53, "Jan  1 2010 should be week 53");
        test.equal(moment([2010,  0,  3]).week(), 53, "Jan  3 2010 should be week 53");
        test.equal(moment([2010,  0,  4]).week(),  1, "Jan  4 2010 should be week 1");
        test.equal(moment([2010,  0, 10]).week(),  1, "Jan 10 2010 should be week 1");
        test.equal(moment([2010,  0, 11]).week(),  2, "Jan 11 2010 should be week 2");

        test.done();
    },

    "weeks year starting saturday" : function (test) {
        test.expect(6);

        test.equal(moment([2010, 11, 27]).week(), 52, "Dec 27 2010 should be week 52");
        test.equal(moment([2011,  0,  1]).week(), 52, "Jan  1 2011 should be week 52");
        test.equal(moment([2011,  0,  2]).week(), 52, "Jan  2 2011 should be week 52");
        test.equal(moment([2011,  0,  3]).week(),  1, "Jan  3 2011 should be week 1");
        test.equal(moment([2011,  0,  9]).week(),  1, "Jan  9 2011 should be week 1");
        test.equal(moment([2011,  0, 10]).week(),  2, "Jan 10 2011 should be week 2");

        test.done();
    },

    "weeks year starting sunday formatted" : function (test) {
        test.expect(5);

        test.equal(moment([2012, 0,  1]).format('w ww wo'), '52 52 52nd', "Jan  1 2012 should be week 52");
        test.equal(moment([2012, 0,  2]).format('w ww wo'),   '1 01 1st', "Jan  2 2012 should be week 1");
        test.equal(moment([2012, 0,  8]).format('w ww wo'),   '1 01 1st', "Jan  8 2012 should be week 1");
        test.equal(moment([2012, 0,  9]).format('w ww wo'),   '2 02 2nd', "Jan  9 2012 should be week 2");
        test.equal(moment([2012, 0, 15]).format('w ww wo'),   '2 02 2nd', "Jan 15 2012 should be week 2");

        test.done();
    },

    "returns the name of the language" : function (test) {
        if (typeof module !== 'undefined' && module.exports) {
            test.equal(require('../../lang/en-gb'), 'en-gb', "module should export en-gb");
        }

        test.done();
    }
};
