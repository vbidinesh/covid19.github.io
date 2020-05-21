const tableDataNested = [{"state": "Maharashtra", "confirmed": 39297, "recovered": 10318, "deaths": 1390, "active": 27589, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 13967, "recovered": 6282, "deaths": 95, "active": 7590, "active_new": 369, "confirmed_new": 776, "recovered_new": 400, "deaths_new": 7}, {"state": "Gujarat", "confirmed": 12910, "recovered": 5219, "deaths": 749, "active": 6942, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 11659, "recovered": 5567, "deaths": 194, "active": 5898, "active_new": 178, "confirmed_new": 571, "recovered_new": 375, "deaths_new": 18}, {"state": "Rajasthan", "confirmed": 6154, "recovered": 3421, "deaths": 150, "active": 2583, "active_new": 119, "confirmed_new": 139, "recovered_new": 17, "deaths_new": 3}, {"state": "Madhya Pradesh", "confirmed": 5735, "recovered": 2734, "deaths": 267, "active": 2734, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 5356, "recovered": 3099, "deaths": 127, "active": 2130, "active_new": 148, "confirmed_new": 181, "recovered_new": 33, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 3103, "recovered": 1136, "deaths": 253, "active": 1714, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 2605, "recovered": 1705, "deaths": 54, "active": 846, "active_new": 3, "confirmed_new": 45, "recovered_new": 41, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2028, "recovered": 1819, "deaths": 39, "active": 170, "active_new": -3, "confirmed_new": 23, "recovered_new": 25, "deaths_new": 1}, {"state": "Telangana", "confirmed": 1661, "recovered": 1013, "deaths": 38, "active": 610, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1731, "recovered": 571, "deaths": 9, "active": 1151, "active_new": 124, "confirmed_new": 124, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1605, "recovered": 571, "deaths": 41, "active": 992, "active_new": 128, "confirmed_new": 143, "recovered_new": 15, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 1403, "recovered": 0, "deaths": 0, "active": 1403, "active_new": 307, "confirmed_new": 307, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1390, "recovered": 678, "deaths": 18, "active": 694, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1103, "recovered": 393, "deaths": 7, "active": 703, "active_new": 0, "confirmed_new": 51, "recovered_new": 50, "deaths_new": 1}, {"state": "Haryana", "confirmed": 1005, "recovered": 670, "deaths": 14, "active": 321, "active_new": -10, "confirmed_new": 12, "recovered_new": 22, "deaths_new": 0}, {"state": "Kerala", "confirmed": 691, "recovered": 510, "deaths": 4, "active": 177, "active_new": 16, "confirmed_new": 24, "recovered_new": 8, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 290, "recovered": 129, "deaths": 3, "active": 158, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 216, "recovered": 165, "deaths": 3, "active": 48, "active_new": -15, "confirmed_new": 14, "recovered_new": 29, "deaths_new": 0}, {"state": "Assam", "confirmed": 200, "recovered": 55, "deaths": 4, "active": 138, "active_new": 5, "confirmed_new": 11, "recovered_new": 6, "deaths_new": 0}, {"state": "Tripura", "confirmed": 173, "recovered": 133, "deaths": 0, "active": 40, "active_new": -17, "confirmed_new": 0, "recovered_new": 17, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 122, "recovered": 53, "deaths": 1, "active": 68, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 114, "recovered": 59, "deaths": 0, "active": 55, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 137, "recovered": 51, "deaths": 4, "active": 79, "active_new": 26, "confirmed_new": 27, "recovered_new": 1, "deaths_new": 0}, {"state": "Goa", "confirmed": 52, "recovered": 7, "deaths": 0, "active": 45, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 44, "recovered": 43, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 25, "recovered": 2, "deaths": 0, "active": 23, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 23, "recovered": 10, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 14, "recovered": 12, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];