const tableDataNested = [{"state": "Maharashtra", "confirmed": 56948, "recovered": 17918, "deaths": 1897, "active": 37133, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 18545, "recovered": 9909, "deaths": 136, "active": 8500, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 15257, "recovered": 7264, "deaths": 303, "active": 7690, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 15205, "recovered": 7549, "deaths": 938, "active": 6718, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 7947, "recovered": 4566, "deaths": 178, "active": 3203, "active_new": 121, "confirmed_new": 131, "recovered_new": 4, "deaths_new": 6}, {"state": "Madhya Pradesh", "confirmed": 7261, "recovered": 3927, "deaths": 313, "active": 3021, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 6991, "recovered": 3991, "deaths": 182, "active": 2818, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 4192, "recovered": 1578, "deaths": 289, "active": 2325, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 4332, "recovered": 0, "deaths": 0, "active": 4332, "active_new": 319, "confirmed_new": 319, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3245, "recovered": 2133, "deaths": 59, "active": 1053, "active_new": 59, "confirmed_new": 128, "recovered_new": 68, "deaths_new": 1}, {"state": "Bihar", "confirmed": 3090, "recovered": 918, "deaths": 15, "active": 2157, "active_new": 54, "confirmed_new": 54, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 2493, "recovered": 793, "deaths": 47, "active": 1651, "active_new": 47, "confirmed_new": 75, "recovered_new": 28, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2139, "recovered": 1918, "deaths": 40, "active": 181, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 2098, "recovered": 1321, "deaths": 63, "active": 714, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1921, "recovered": 854, "deaths": 26, "active": 1041, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1660, "recovered": 887, "deaths": 7, "active": 766, "active_new": -8, "confirmed_new": 67, "recovered_new": 75, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1381, "recovered": 838, "deaths": 18, "active": 525, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1088, "recovered": 555, "deaths": 8, "active": 525, "active_new": 81, "confirmed_new": 84, "recovered_new": 3, "deaths_new": 0}, {"state": "Assam", "confirmed": 832, "recovered": 88, "deaths": 4, "active": 737, "active_new": 48, "confirmed_new": 48, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 493, "recovered": 79, "deaths": 4, "active": 407, "active_new": 24, "confirmed_new": 24, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 462, "recovered": 191, "deaths": 4, "active": 267, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 364, "recovered": 83, "deaths": 0, "active": 281, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 289, "recovered": 189, "deaths": 4, "active": 96, "active_new": 9, "confirmed_new": 11, "recovered_new": 2, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 276, "recovered": 66, "deaths": 6, "active": 201, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 242, "recovered": 165, "deaths": 0, "active": 77, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 68, "recovered": 37, "deaths": 0, "active": 31, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 54, "recovered": 43, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 49, "recovered": 17, "deaths": 0, "active": 32, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 55, "recovered": 4, "deaths": 0, "active": 51, "active_new": 11, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 20, "recovered": 12, "deaths": 1, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 18, "recovered": 0, "deaths": 0, "active": 18, "active_new": 9, "confirmed_new": 9, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];