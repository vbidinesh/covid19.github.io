const tableDataNested = [{"state": "Maharashtra", "confirmed": 39297, "recovered": 10318, "deaths": 1390, "active": 27589, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 13191, "recovered": 5882, "deaths": 88, "active": 7221, "active_new": -247, "confirmed_new": 743, "recovered_new": 987, "deaths_new": 3}, {"state": "Gujarat", "confirmed": 12539, "recovered": 5219, "deaths": 749, "active": 6571, "active_new": 192, "confirmed_new": 398, "recovered_new": 176, "deaths_new": 30}, {"state": "Delhi", "confirmed": 11088, "recovered": 5192, "deaths": 176, "active": 5720, "active_new": 82, "confirmed_new": 534, "recovered_new": 442, "deaths_new": 10}, {"state": "Rajasthan", "confirmed": 5952, "recovered": 3373, "deaths": 143, "active": 2436, "active_new": 71, "confirmed_new": 107, "recovered_new": 36, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 5735, "recovered": 2734, "deaths": 267, "active": 2734, "active_new": -18, "confirmed_new": 0, "recovered_new": 16, "deaths_new": 2}, {"state": "Uttar Pradesh", "confirmed": 4926, "recovered": 2918, "deaths": 123, "active": 1885, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 3103, "recovered": 1136, "deaths": 253, "active": 1714, "active_new": 77, "confirmed_new": 142, "recovered_new": 62, "deaths_new": 3}, {"state": "Andhra Pradesh", "confirmed": 2560, "recovered": 1664, "deaths": 53, "active": 843, "active_new": 27, "confirmed_new": 71, "recovered_new": 43, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2005, "recovered": 1794, "deaths": 38, "active": 173, "active_new": -149, "confirmed_new": 3, "recovered_new": 152, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1661, "recovered": 1013, "deaths": 38, "active": 610, "active_new": 25, "confirmed_new": 27, "recovered_new": 2, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1579, "recovered": 548, "deaths": 9, "active": 1022, "active_new": 29, "confirmed_new": 60, "recovered_new": 31, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1462, "recovered": 556, "deaths": 41, "active": 864, "active_new": 53, "confirmed_new": 67, "recovered_new": 13, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 1390, "recovered": 678, "deaths": 18, "active": 694, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1052, "recovered": 343, "deaths": 6, "active": 703, "active_new": 37, "confirmed_new": 74, "recovered_new": 36, "deaths_new": 1}, {"state": "Haryana", "confirmed": 993, "recovered": 648, "deaths": 14, "active": 331, "active_new": 8, "confirmed_new": 29, "recovered_new": 21, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 1096, "recovered": 0, "deaths": 0, "active": 1096, "active_new": 282, "confirmed_new": 282, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 667, "recovered": 502, "deaths": 4, "active": 161, "active_new": 19, "confirmed_new": 24, "recovered_new": 5, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 248, "recovered": 127, "deaths": 3, "active": 118, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 202, "recovered": 136, "deaths": 3, "active": 63, "active_new": -76, "confirmed_new": 3, "recovered_new": 79, "deaths_new": 0}, {"state": "Tripura", "confirmed": 173, "recovered": 116, "deaths": 0, "active": 57, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 171, "recovered": 49, "deaths": 4, "active": 115, "active_new": 5, "confirmed_new": 13, "recovered_new": 7, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 122, "recovered": 53, "deaths": 1, "active": 68, "active_new": 10, "confirmed_new": 11, "recovered_new": 1, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 100, "recovered": 59, "deaths": 0, "active": 41, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 104, "recovered": 48, "deaths": 4, "active": 49, "active_new": 11, "confirmed_new": 12, "recovered_new": 1, "deaths_new": 0}, {"state": "Goa", "confirmed": 50, "recovered": 7, "deaths": 0, "active": 43, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 43, "recovered": 43, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 23, "recovered": 10, "deaths": 0, "active": 13, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 12, "deaths": 1, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 20, "recovered": 2, "deaths": 0, "active": 18, "active_new": 13, "confirmed_new": 13, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];