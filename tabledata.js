const tableDataNested = [{"state": "Maharashtra", "confirmed": 54758, "recovered": 16954, "deaths": 1792, "active": 36012, "active_new": 826, "confirmed_new": 2091, "recovered_new": 1168, "deaths_new": 97}, {"state": "Tamil Nadu", "confirmed": 17728, "recovered": 9342, "deaths": 128, "active": 8258, "active_new": 26, "confirmed_new": 646, "recovered_new": 611, "deaths_new": 9}, {"state": "Gujarat", "confirmed": 14829, "recovered": 7139, "deaths": 915, "active": 6775, "active_new": -169, "confirmed_new": 361, "recovered_new": 503, "deaths_new": 27}, {"state": "Delhi", "confirmed": 14465, "recovered": 6954, "deaths": 288, "active": 7223, "active_new": 217, "confirmed_new": 412, "recovered_new": 183, "deaths_new": 12}, {"state": "Rajasthan", "confirmed": 7536, "recovered": 4276, "deaths": 170, "active": 3090, "active_new": 11, "confirmed_new": 236, "recovered_new": 220, "deaths_new": 5}, {"state": "Madhya Pradesh", "confirmed": 7024, "recovered": 3689, "deaths": 305, "active": 3030, "active_new": 42, "confirmed_new": 165, "recovered_new": 118, "deaths_new": 5}, {"state": "Uttar Pradesh", "confirmed": 6724, "recovered": 3824, "deaths": 177, "active": 2723, "active_new": 55, "confirmed_new": 227, "recovered_new": 164, "deaths_new": 8}, {"state": "West Bengal", "confirmed": 4009, "recovered": 1486, "deaths": 283, "active": 2240, "active_new": 116, "confirmed_new": 193, "recovered_new": 72, "deaths_new": 5}, {"state": "Andhra Pradesh", "confirmed": 2983, "recovered": 2017, "deaths": 57, "active": 909, "active_new": -29, "confirmed_new": 97, "recovered_new": 125, "deaths_new": 1}, {"state": "State Unassigned", "confirmed": 2970, "recovered": 0, "deaths": 0, "active": 2970, "active_new": 328, "confirmed_new": 328, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 2968, "recovered": 800, "deaths": 14, "active": 2154, "active_new": 163, "confirmed_new": 231, "recovered_new": 67, "deaths_new": 1}, {"state": "Karnataka", "confirmed": 2283, "recovered": 748, "deaths": 44, "active": 1489, "active_new": 58, "confirmed_new": 101, "recovered_new": 43, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2106, "recovered": 1918, "deaths": 40, "active": 148, "active_new": 20, "confirmed_new": 25, "recovered_new": 5, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1991, "recovered": 1284, "deaths": 57, "active": 650, "active_new": -50, "confirmed_new": 71, "recovered_new": 120, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 1759, "recovered": 833, "deaths": 24, "active": 902, "active_new": 66, "confirmed_new": 91, "recovered_new": 24, "deaths_new": 1}, {"state": "Odisha", "confirmed": 1517, "recovered": 733, "deaths": 7, "active": 777, "active_new": -5, "confirmed_new": 79, "recovered_new": 84, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1305, "recovered": 824, "deaths": 16, "active": 465, "active_new": 70, "confirmed_new": 92, "recovered_new": 22, "deaths_new": 0}, {"state": "Kerala", "confirmed": 964, "recovered": 542, "deaths": 6, "active": 416, "active_new": 57, "confirmed_new": 67, "recovered_new": 10, "deaths_new": 0}, {"state": "Assam", "confirmed": 667, "recovered": 63, "deaths": 4, "active": 597, "active_new": 118, "confirmed_new": 118, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 426, "recovered": 153, "deaths": 4, "active": 269, "active_new": 16, "confirmed_new": 21, "recovered_new": 5, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 400, "recovered": 64, "deaths": 4, "active": 329, "active_new": 45, "confirmed_new": 51, "recovered_new": 6, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 360, "recovered": 79, "deaths": 0, "active": 281, "active_new": 56, "confirmed_new": 68, "recovered_new": 12, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 278, "recovered": 187, "deaths": 4, "active": 87, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 247, "recovered": 63, "deaths": 4, "active": 177, "active_new": 24, "confirmed_new": 24, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 209, "recovered": 165, "deaths": 0, "active": 44, "active_new": 11, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 67, "recovered": 28, "deaths": 0, "active": 39, "active_new": -9, "confirmed_new": 0, "recovered_new": 9, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 53, "recovered": 43, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 49, "recovered": 17, "deaths": 0, "active": 32, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 39, "recovered": 4, "deaths": 0, "active": 35, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 15, "recovered": 12, "deaths": 1, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];