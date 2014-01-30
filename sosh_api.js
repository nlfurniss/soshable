var _ = require('underscore'),
    request = require('request'),
    zlib = require('zlib'),
    apiSettings = require('./config/settings').sosh_api;

function Sosh() {
    this.baseUrl = 'https://secure.sosh.com/api/1';
    this.oauthBase = {
        oauth_version: '1.0',
        oauth_signature_method: 'PLAINTEXT'
    };
    this.baseOptions = function() {
        return {
            headers: {
                'Authorization': this.createOAuthHeader(),
                'Accept-Encoding': 'gzip',
                'User-Agent': 'Turtle/283 (iPhone; iOS 7.0.4; Scale/2.00)'
            },
        };
    };

    this.getActivities = function(pcat, callback) {
        var self = this;
            options = _.extend(this.baseOptions(), {
                uri: this.baseUrl + '/popular.jsonz',
                qs: {
                    num_results: -1,
                    pcat_filter: pcat,
                    session_geo_id: 1,
                    time_filter: 'all'
                }
            });

        var resp = {
            "activities": [
            {
                "pneighborhood_ids": [
                10, 
                11
                ], 
                "title_no_prefix": "SF Sketchfest: Comedy NightLife", 
                "social_proof_count": 56, 
                "when": "Tomorrow", 
                "secondary_category_name": "Parties", 
                "title_tag": "Nightlife", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/7b/1f/7b1f0ac1da458d5dc287487c4653a530.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/d0/35/d0355f422257fe16e8264031ef288692.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/a7/48/a748c6e3b6e7ab9c81d93c00053d7c53.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/08/60/086012a961646e597b55330f92edf4a9.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/2e/4b/2e4bd1bffae801f0367a7f7c5ae34364.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/06/ef/06eff571381b4d4b1e37670541fb634e.jpg"
                ], 
                "id": 12834, 
                "social_proof_text": "56 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94118", 
                "instant_skinny": "Comedy and science nerds can unite on January 30 for the fourth SF Sketchfest Comedy NightLife at the California Academy of Sciences. Sharks, rare butterflies and iridescent jellyfish play host…", 
                "is_bookmarked": false, 
                "geo_lat": 37.7698218, 
                "filter_when": [
                "thisweek"
                ], 
                "geo_long": -122.4660077, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/22/64/2264adfba7ace4ab46edd28f3776abd6.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/ed/99/ed99815382910091bb5b42cd72e09f23.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/50/fa/50fa3ea495ee684676c875d0b77852d5.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/77/ae/77ae2cebbb8e0a6fd76c9bde73fbbacc.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/8e/eb/8eebb52300157492becc80657c0da421.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/a9/ed/a9edc23602bf8d488608fb7a0603ad72.jpg"
                ], 
                "addr_street": "55 Music Concourse Dr, Golden Gate Park", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/dc/5c/dc5ce647c80ffd00b6257a5736052bbe.jpg", 
                "title": "SF Sketchfest: Comedy NightLife", 
                "loved_it": false, 
                "series_id": 64, 
                "timestamp_start": 1391133600.0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/ce/b8/ceb8940ec7532d51ab645f6368630d69.jpg", 
                "stripped_insider_tip": "Microbrewery called \"Social\" on 9th and Irving or wine bar at 7th and Irving called \"Inner Fog\" are great places to grab a drink before or after.", 
                "has_distance": true, 
                "insider_tip": "\"Microbrewery called \"Social\" on 9th and Irving or wine bar at 7th and Irving called \"Inner Fog\" are great places to grab a drink before or after.\"", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/7e/af/7eaf02f833fc1c8ad77410d88ab5cfe3.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "2.4", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/af/0f/af0f289f29a5635a989ff2e57bd6e6b6.jpg", 
                "neighborhood_name": "Golden Gate Park", 
                "when_long": [
                "Tomorrow\tJan. 30th, 6pm-10pm"
                ], 
                "absolute_url": "/san-francisco/california-academy-sciences/sf-sketchfest-comedy-nightlife/a/7W4q/", 
                "venue_name": "The Cal Academy of Sciences", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 1391148000.0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/80/93/8093e74a66dd0ddc1149ba5bb67ce2dc.jpg", 
                "filter_pcat": [
                96, 
                32, 
                2, 
                6, 
                103, 
                41, 
                106, 
                43, 
                13, 
                77, 
                16, 
                50, 
                9
                ], 
                "addr_state": "CA", 
                "addr_intersection": ""
            }, 
            {
                "pneighborhood_ids": [
                12
                ], 
                "title_no_prefix": "Cheesemonger 101: Make Your Own Mozzarella", 
                "social_proof_count": 26, 
                "when": "Tomorrow", 
                "secondary_category_name": "Classes", 
                "title_tag": "Learn Something New", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/b3/87/b38794909963b7a0fdeb32018a28b3a8.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/ae/d4/aed45949022f6169f372731dd36728b7.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/61/94/61945824c45e93fd1ff08bd2dfc8cc75.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/de/42/de42889e0917954c2e98ef33f6382bc4.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/e8/34/e8344045a58db54111ab04f04eee6ab0.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/03/9f/039f8fcc8f6ca42c078aa4022b92b145.jpg"
                ], 
                "id": 12888, 
                "social_proof_text": "26 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94115", 
                "instant_skinny": "In Cheesemonger 101: Make and Stretch Your Own Mozzarella, instructor Nicole Kramer Easterday, the mastermind behind FARMcurious, schools you on those fist-sized balls of white goodness known as mozzarella. …", 
                "is_bookmarked": false, 
                "geo_lat": 37.7775225, 
                "filter_when": [
                "thisweek"
                ], 
                "geo_long": -122.441467, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/44/e2/44e2e468bc1b3321c5757af56f1c62ba.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/a6/72/a67241241ba03137f01c71404c6de65e.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/5b/34/5b3474ef935cbe603eb5fd67523a8832.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/7c/e3/7ce36647f5717bfd2d5e955173b274f0.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/3d/4a/3d4ad562d44a368d5cd9a671d7b89492.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/04/d7/04d763e2aff937703f658d47ab5c1f4b.jpg"
                ], 
                "addr_street": "1798 McAllister St", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/11/44/11448205c291e38229412b778d5c1f27.jpg", 
                "title": "Cheesemonger 101: Make Your Own Mozzarella", 
                "loved_it": false, 
                "series_id": null, 
                "timestamp_start": 1391137200.0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/53/83/5383dd312553231737ca8cef2f400fa8.jpg", 
                "stripped_insider_tip": "", 
                "has_distance": true, 
                "insider_tip": "", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/8b/1f/8b1f6b9aa1496b132dfed99f4e233c2f.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "2.2", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/c8/23/c823efae151d09909df76e6179682262.jpg", 
                "neighborhood_name": "Western Addition/NOPA", 
                "when_long": [
                "Tomorrow\tJan. 30th, 7pm-9:30pm"
                ], 
                "absolute_url": "/san-francisco/workshop/cheesemonger-101-make-your-own-mozzarella/a/2E3Z/", 
                "venue_name": "Workshop", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 1391146200.0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/f8/63/f8637e87f25525f23a74e19c13308e77.jpg", 
                "filter_pcat": [
                5, 
                9, 
                75, 
                52, 
                87, 
                20
                ], 
                "addr_state": "CA", 
                "addr_intersection": ""
            }, 
            {
                "pneighborhood_ids": [
                10, 
                11
                ], 
                "title_no_prefix": "Standup & Caricatures in the Museum", 
                "social_proof_count": 38, 
                "when": "Tomorrow", 
                "secondary_category_name": "Parties", 
                "title_tag": "Sketchfest NightLife", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/7a/af/7aaf45fc1428b7299bb914f7babdd6e5.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/43/28/43288870561f907a8b7355e338625d14.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/b8/65/b865bc9ae5efaa5864e46d53a4afc7d5.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/02/a5/02a582d3c8451e58dd6dfd1469128370.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/1e/b9/1eb9809923d3297363c1e50f9ac6212d.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/05/ec/05ec66855b68949ca9af7a59006f0e67.jpg"
                ], 
                "id": 13556, 
                "social_proof_text": "38 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94118", 
                "instant_skinny": "There’ll be no rotten tomatoes here, as SF Sketchfest makes its triumphant return to NightLife with an impressive lineup of comedic talent in tow. ", 
                "is_bookmarked": false, 
                "geo_lat": 37.7698218, 
                "filter_when": [
                "thisweek"
                ], 
                "geo_long": -122.4660077, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/e9/7c/e97cbc79872165237d0b22f65a7d315a.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/42/ac/42ac7e292ca9d017e28cb4a2fe50187a.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/72/2f/722feb8667012bcfc3a23480985c56de.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/c4/87/c4871ed86116462f28f265fcfdf0ac20.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/fb/8c/fb8c23942b58b37194f81a07aa1bb945.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/d8/9c/d89c5d7023138a7ea7237d198f9d06aa.jpg"
                ], 
                "addr_street": "55 Music Concourse Dr, Golden Gate Park", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/e5/7d/e57d5bf76b2570a147624121b06572fa.jpg", 
                "title": "Standup & Caricatures in the Museum", 
                "loved_it": false, 
                "series_id": 64, 
                "timestamp_start": 1391133600.0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/0d/2a/0d2a1f3b64191df202776c282cbb029d.jpg", 
                "stripped_insider_tip": "Microbrewery called \"Social\" on 9th and Irving or wine bar at 7th and Irving called \"Inner Fog\" are great places to grab a drink before or after.", 
                "has_distance": true, 
                "insider_tip": "\"Microbrewery called \"Social\" on 9th and Irving or wine bar at 7th and Irving called \"Inner Fog\" are great places to grab a drink before or after.\"", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/c3/69/c36989ac3cc60692a779785c4852b033.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "2.4", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/02/07/0207b283bf9ef1c0742e64f5dc5f30c6.jpg", 
                "neighborhood_name": "Golden Gate Park", 
                "when_long": [
                "Tomorrow\tJan. 30th, 6pm-10pm"
                ], 
                "absolute_url": "/san-francisco/california-academy-sciences/standup-caricatures-in-the-museum/a/23Bh/", 
                "venue_name": "The Cal Academy of Sciences", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 1391148000.0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/13/da/13da8a4dd0d20c296b4b06b088b80b7c.jpg", 
                "filter_pcat": [
                96, 
                32, 
                6, 
                103, 
                9, 
                106, 
                43, 
                13, 
                77, 
                16, 
                50
                ], 
                "addr_state": "CA", 
                "addr_intersection": ""
            }, 
            {
                "pneighborhood_ids": [
                3
                ], 
                "title_no_prefix": "All-You-Can-Eat Superbowl Fiesta", 
                "social_proof_count": 20, 
                "when": "Sunday, Feb. 2nd", 
                "secondary_category_name": "Parties", 
                "title_tag": "Superbowl XLVIII", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/bb/18/bb18d35041a18cd96bb4e0dab1596d73.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/63/c3/63c3083480c42817dfb283316eb3c5c8.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/d1/7b/d17bf54d20840e09244e5f847a668deb.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/21/83/2183682d094e9477c614650e278a2e1e.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/a1/96/a196fab8c3414b4127c5008e809f6131.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/54/60/546054d9990419e7076d2e1f73ae8ed7.jpg"
                ], 
                "id": 13508, 
                "social_proof_text": "20 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94110", 
                "instant_skinny": "The Niners may not have made it to the Superbowl, but all the more reason to get together and cheer against the Seahawks! Join Tacolicious at their Valencia location for…", 
                "is_bookmarked": false, 
                "geo_lat": 37.7605905, 
                "filter_when": [
                "weekend", 
                "thisweek"
                ], 
                "geo_long": -122.4213802, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/09/d0/09d0147ea5a3218cfb29f7719a8bf812.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/6a/ee/6aee714808c1660fbd709064306d2374.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/22/d3/22d31bdb56faaaa41d1e1e4b0e118c6b.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/fa/4c/fa4cdfada149afed07adac4d7f9bca57.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/b4/de/b4de68bbe0977fa02262d9ba1c7d22bd.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/32/69/3269f25ae90fef6d7c2a150ba461860e.jpg"
                ], 
                "addr_street": "741 Valencia St", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/4f/5a/4f5ad35788899f08b287856f1795d3d0.jpg", 
                "title": "All-You-Can-Eat Superbowl Fiesta", 
                "loved_it": false, 
                "series_id": null, 
                "timestamp_start": 1391382000.0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/0d/1d/0d1d7298b297187f2f2cd9e201dff99e.jpg", 
                "stripped_insider_tip": "There is the option of closing off the skylit back room for private events, or just for gathering big groups for birthdays. They take reservations for groups of twelve or more.", 
                "has_distance": true, 
                "insider_tip": "\"There is the option of closing off the skylit back room for private events, or just for gathering big groups for birthdays. They take reservations for groups of twelve or more.\"", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/f5/fb/f5fb7a031e9a13e4c5989ae24328bd01.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "1.2", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/c9/85/c98514703ef64457da97712ab34b0dc3.jpg", 
                "neighborhood_name": "The Mission", 
                "when_long": [
                "Sun,\tFeb. 2nd, 3pm"
                ], 
                "absolute_url": "/san-francisco/tacolicious/all-you-can-eat-superbowl-fiesta/a/2pF4/", 
                "venue_name": "Tacolicious", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 1391414400.0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/c7/10/c710fc5860e288e3149a52b6944d73fc.jpg", 
                "filter_pcat": [
                96, 
                1, 
                37, 
                77
                ], 
                "addr_state": "CA", 
                "addr_intersection": "18th St"
            }, 
            {
                "pneighborhood_ids": [
                3
                ], 
                "title_no_prefix": "Superbowl Spread: Magic Bacon Bombs", 
                "social_proof_count": 4, 
                "when": "Saturday, Feb. 1st", 
                "secondary_category_name": "Lunch", 
                "title_tag": "Superbowl XLVIII", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/5c/82/5c82933680afcc4009705a3c69b8bfa6.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/9b/27/9b276c2b7e1df9b8ee1604e800258803.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/41/4d/414d4c1422852a8ff702c750eea64fe2.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/30/8f/308fd77f010307649ee255c728f6276c.jpg"
                ], 
                "id": 13699, 
                "social_proof_text": "4 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94103", 
                "instant_skinny": "The Situation: You’ve never hosted a Super Bowl party filled with Magic Bacon Bombs. In other words, you haven’t truly lived. The Solution: Wings, Polish sausage, kraut, and more from…", 
                "is_bookmarked": false, 
                "geo_lat": 37.7664696, 
                "filter_when": [
                "weekend", 
                "thisweek"
                ], 
                "geo_long": -122.4198172, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/21/ea/21ea1d447c3395588db75be750bacebe.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/c6/dc/c6dcfbb379f1db4874ac692e50dccfe0.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/dd/48/dd48674344fba6f7bba11ba47fba06e5.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/23/8e/238e9a55bfe304598afd9505e63c80c3.jpg"
                ], 
                "addr_street": "1909 Mission St", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/db/1a/db1ad329d5212eb72c5775b223efe2e9.jpg", 
                "title": "Superbowl Spread: Magic Bacon Bombs", 
                "loved_it": false, 
                "series_id": null, 
                "timestamp_start": 1391281200.0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/25/25/2525b47c5cba6176be823b7d4f363b23.jpg", 
                "stripped_insider_tip": "", 
                "has_distance": true, 
                "insider_tip": "", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/c3/8e/c38eda90efde62eb36a551d1fc9d4737.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "1.6", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/23/63/236372c8575ccc70969daef13064a482.jpg", 
                "neighborhood_name": "The Mission", 
                "when_long": [
                "Sat,\tFeb. 1st, 11am-3pm"
                ], 
                "absolute_url": "/san-francisco/4505-meats-butcher-shop/superbowl-spread-magic-bacon-bombs/a/2Xsg/", 
                "venue_name": "4505 Meats Butcher Shop", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 1391295600.0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/92/56/92567e6796f12e23220f9fa1d0aced2d.jpg", 
                "filter_pcat": [], 
                "addr_state": "CA", 
                "addr_intersection": ""
            }, 
            {
                "pneighborhood_ids": [
                4, 
                15
                ], 
                "title_no_prefix": "British Restaurant from the Park Tavern Team", 
                "social_proof_count": 248, 
                "when": "Every day", 
                "secondary_category_name": "Restaurants", 
                "title_tag": "Grab A Bite", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/da/da/dadacec79bf8d9ffa7581941a88f84f9.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/05/ac/05ac0593ddd6f4777ec48eac368d7031.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/bf/6f/bf6f657999b98b8cc87c090a1ec35391.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/ab/53/ab536535d2db63260bbd4d8d02c64b53.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/7f/15/7f158ed1a8ce67f9da68ea6947e06dc2.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/90/ad/90ad8a40d0b129f6e54ed33051fa9d06.jpg"
                ], 
                "id": 7372, 
                "social_proof_text": "248 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94103", 
                "instant_skinny": "Tucked in the chic Hotel Zetta is the Cavalier, a British-inspired restaurant from the Park Tavern and Marlowe team of chef Jennifer Puccio and proprietor Anna Weinberg. ", 
                "is_bookmarked": false, 
                "geo_lat": 37.7834994, 
                "filter_when": [
                "weekend", 
                "thisweek", 
                "today"
                ], 
                "geo_long": -122.4072412, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/79/39/79390baa8e8630e121a6262225da6f3d.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/70/05/7005e8cf0e89f5c3cbe1c837da97c1a7.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/db/c1/dbc1bca6e105892cb8455bda27e1a245.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/9c/2b/9c2b8bdeb3dd3b393c8f474b58580daf.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/40/f8/40f8c409e6fbe993504a8c6e45e351dd.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/5c/89/5c89a9fb24eb4d30b88adbf443424ea9.jpg"
                ], 
                "addr_street": "55 5th St", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/8a/f4/8af4c03c0712953588cff519c312eb6c.jpg", 
                "title": "British Restaurant from the Park Tavern Team", 
                "loved_it": false, 
                "series_id": null, 
                "timestamp_start": 0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/b8/78/b8789d945fdd8d34b2a537febfa06995.jpg", 
                "stripped_insider_tip": "", 
                "has_distance": true, 
                "insider_tip": "", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/07/af/07afb64be6b88987638ed282c32bcad4.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "2.9", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/ee/48/ee48f655fe437af23b814072334aed0e.jpg", 
                "neighborhood_name": "SOMA", 
                "when_long": [
                "Today  \t7am-2:30pm, 5:30pm-10pm", 
                "Mon-Wed\t7am-2:30pm, 5:30pm-10pm", 
                "Thu-Sat\t7am-2:30pm, 5:30pm-11pm", 
                "Sun    \t7am-2:30pm, 5:30pm-10pm"
                ], 
                "absolute_url": "/san-francisco/the-cavalier/british-restaurant-from-the-park-tavern-team/a/Y27C/", 
                "venue_name": "The Cavalier", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/59/95/5995e6d3aa2ae0c41ad6449d76f47bc7.jpg", 
                "filter_pcat": [
                92, 
                1, 
                18, 
                76, 
                37
                ], 
                "addr_state": "CA", 
                "addr_intersection": "Jessie St & Mission St"
            }, 
            {
                "pneighborhood_ids": [
                5
                ], 
                "title_no_prefix": "Beignets All Day", 
                "social_proof_count": 1012, 
                "when": "Every day", 
                "secondary_category_name": "Restaurants", 
                "title_tag": "Grab A Bite", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/7b/1f/7b1f0ac1da458d5dc287487c4653a530.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/f3/b4/f3b4ba641183645f5aede6bbeed0fe92.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/b4/1f/b41f4789911f5dae60a6a77b702524f1.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/4a/11/4a11526b513ae50a56b2039011a8aa67.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/19/1c/191ce5fa4a6c73f00b21d33bdaf7c20b.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/29/31/2931cde4b8fb5fa7cfee2fb7abf5d990.jpg"
                ], 
                "id": 313, 
                "social_proof_text": "1,012 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94102", 
                "instant_skinny": "Brenda’s French Soul Food is a Creole Diner in the Civic Center serving rich, flavorful food with French style and New Orleans soul. Chef-owner and New Orleans native Brenda Buenviaje…", 
                "is_bookmarked": false, 
                "geo_lat": 37.7828912, 
                "filter_when": [
                "weekend", 
                "thisweek", 
                "today", 
                "tonight"
                ], 
                "geo_long": -122.4190297, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/22/64/2264adfba7ace4ab46edd28f3776abd6.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/06/85/06856c85d2b3389934ff3ed2ea712d18.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/74/ea/74ea137f79288172a07c1a12ed1678d6.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/79/49/794930acffb6b0e70821d94b462a332b.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/33/f7/33f7e97b2c9bc03d58dd6757816ab836.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/8a/8e/8a8ec62a1720cb552a0b08a7a795f4c6.jpg"
                ], 
                "addr_street": "652 Polk St", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/6c/ff/6cff8962228d3b6851acd81db859edb3.jpg", 
                "title": "Beignets All Day", 
                "loved_it": true, 
                "series_id": null, 
                "timestamp_start": 0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/0b/af/0baf8637c2386ec242f73f691f189340.jpg", 
                "stripped_insider_tip": "Order the beignet sampler to try an assortment of flavors!", 
                "has_distance": true, 
                "insider_tip": "\"Order the beignet sampler to try an assortment of flavors!\"", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/d2/fe/d2fe80c5ba844fb39c80c8628ef0184b.jpg", 
                "done_it": true, 
                "addr_city": "San Francisco", 
                "distance": "2.6", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/55/f1/55f1a0d7f5762da769ede584ef38d0f1.jpg", 
                "neighborhood_name": "Civic Center/Tenderloin", 
                "when_long": [
                "Today  \t8am-10pm", 
                "Mon-Tue\t8am-3pm", 
                "Wed-Sat\t8am-10pm", 
                "Sun    \t8am-3pm"
                ], 
                "absolute_url": "/san-francisco/brendas-french-soul-food/beignets-all-day/a/ek3/", 
                "venue_name": "Brenda's French Soul Food", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/d3/fe/d3fe0d33cc4a6bcf8ab8fb0bca1628c0.jpg", 
                "filter_pcat": [
                1, 
                37, 
                76, 
                14, 
                18, 
                31
                ], 
                "addr_state": "CA", 
                "addr_intersection": ""
            }, 
            {
                "pneighborhood_ids": [
                4
                ], 
                "title_no_prefix": "Traditional Thai Massage", 
                "social_proof_count": 178, 
                "when": "Every day", 
                "secondary_category_name": "Massage", 
                "title_tag": "Rest & Relax", 
                "social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/7b/1f/7b1f0ac1da458d5dc287487c4653a530.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/9c/11/9c11987ad72c94b5c71bbf0d2a37521f.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/e8/9c/e89c94c1840401e6169f198ff9f17544.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/32/06/32065cc873bb7837f726e066d31f61ce.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/8b/3b/8b3b03245460ae955845d66c5fad7262.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/8e/81/8e812a3b63ada1e8515dc40de2300240.jpg"
                ], 
                "id": 134, 
                "social_proof_text": "178 people bookmarked this", 
                "similar_activities": [], 
                "addr_zipcode": "94107", 
                "instant_skinny": "Massage away all tension and stress with a traditional Thai massage at the heavenly Suchada.  Do not be misled by the petite stature of the women who work at…", 
                "is_bookmarked": false, 
                "geo_lat": 37.7701568, 
                "filter_when": [
                "weekend", 
                "thisweek", 
                "today", 
                "tonight"
                ], 
                "geo_long": -122.4022622, 
                "small_social_proof_mugshots": [
                "https://dm8upoct4laqm.cloudfront.net/thumbs/22/64/2264adfba7ace4ab46edd28f3776abd6.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/9c/1b/9c1ba1bc1064a1808350b8c225f02a3a.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/48/37/48372d69f8112345a7888b7abb1e5ed7.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/ec/e9/ece9414be5eefbf797a0ecb63d3d5281.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/27/44/2744d56521796b8aec65e0c957a4afc5.jpg", 
                "https://dm8upoct4laqm.cloudfront.net/thumbs/50/66/5066e6fd0352375220a349af729598d5.jpg"
                ], 
                "addr_street": "690 King St", 
                "large_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/cf/91/cf9158d6076c21ccbbdeae5218c7c99d.jpg", 
                "title": "Traditional Thai Massage", 
                "loved_it": false, 
                "series_id": null, 
                "timestamp_start": 0, 
                "wide_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/49/b8/49b8202e593ccbd1d29c7900cc17c943.jpg", 
                "stripped_insider_tip": "There are different types of Thai massage, traditional, herbal, aroma, foot. Make sure you understand the main purpose of each massage before you make an appointment. Also know your ability to receive each massage. For example, if you've never done Thai massage before, go easy with foot massage or aroma massage.", 
                "has_distance": true, 
                "insider_tip": "\"There are different types of Thai massage, traditional, herbal, aroma, foot. Make sure you understand the main purpose of each massage before you make an appointment. Also know your ability to receive each massage. For example, if you've never done Thai massage before, go easy with foot massage or aroma massage.\"", 
                "medium_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/b0/18/b01854d0c7f5f6be64a4d33502c73b4c.jpg", 
                "done_it": false, 
                "addr_city": "San Francisco", 
                "distance": "2.3", 
                "smart_feed_image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/74/3d/743dc83ec22ff7237e8c0dddbd5dd496.jpg", 
                "neighborhood_name": "SOMA", 
                "when_long": [
                "Today   \t9am-9pm", 
                "Everyday\t9am-9pm"
                ], 
                "absolute_url": "/san-francisco/suchada-thai-massage/traditional-thai-massage/a/YVd/", 
                "venue_name": "Suchada Thai Massage", 
                "geo_id": 1, 
                "not_for_me": false, 
                "timestamp_end": 0, 
                "image_url": "https://dm8upoct4laqm.cloudfront.net/thumbs/35/6b/356b061ff6fe547fd9f90a189bb7a1e0.jpg", 
                "filter_pcat": [
                100, 
                78
                ], 
                "addr_state": "CA", 
                "addr_intersection": ""
            }
            ], 
            "more_results": true, 
            "rc": 0
        }
        callback(null, resp, resp);
        // request(options, function(err, resp, body) {
        //     if (err) {
        //         callback(err, null, null);
        //     } else {
        //         callback(null, resp, body);
        //     }
        // });
    };

    this.test = function(callback) {
        var self = this,
            options = _.extend(this.baseOptions(), {
                uri: this.baseUrl + '/initial_values.jsonz'
            });

        request(options, function(err, resp, body) {
            if (err) {
                callback(err, null, null);
            } else {
                callback(null, resp, body);
            }
        });
    }

    this.createOAuthHeader = function() {
        var options = _.extend(this.oauthBase, apiSettings);
        options.oauth_timestamp = Math.floor(Date.now() / 1000).toString();

        var authHeader = 'OAuth ' + Object.keys(options).map(function(key) {
            return key + '="' + options[key] + '"';
        }).join(', ');

        return authHeader;
    }
}

module.exports = Sosh;