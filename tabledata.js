const tableDataNested = [{"state": "Maharashtra", "confirmed": 54758, "recovered": 16954, "deaths": 1792, "active": 36012, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 17728, "recovered": 9342, "deaths": 128, "active": 8258, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 14829, "recovered": 7139, "deaths": 915, "active": 6775, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 15257, "recovered": 7264, "deaths": 303, "active": 7690, "active_new": 467, "confirmed_new": 792, "recovered_new": 310, "deaths_new": 15}, {"state": "Rajasthan", "confirmed": 7645, "recovered": 4293, "deaths": 172, "active": 3180, "active_new": 90, "confirmed_new": 109, "recovered_new": 17, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 7024, "recovered": 3689, "deaths": 305, "active": 3030, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 6724, "recovered": 3824, "deaths": 177, "active": 2723, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 4009, "recovered": 1486, "deaths": 283, "active": 2240, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3117, "recovered": 2065, "deaths": 58, "active": 994, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 4013, "recovered": 0, "deaths": 0, "active": 4013, "active_new": 1043, "confirmed_new": 1043, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 3006, "recovered": 800, "deaths": 14, "active": 2192, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 2405, "recovered": 762, "deaths": 45, "active": 1596, "active_new": 107, "confirmed_new": 122, "recovered_new": 14, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2106, "recovered": 1918, "deaths": 40, "active": 148, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1991, "recovered": 1284, "deaths": 57, "active": 650, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1759, "recovered": 833, "deaths": 24, "active": 902, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1593, "recovered": 733, "deaths": 7, "active": 853, "active_new": 76, "confirmed_new": 76, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1305, "recovered": 824, "deaths": 16, "active": 465, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 964, "recovered": 542, "deaths": 6, "active": 416, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 705, "recovered": 63, "deaths": 4, "active": 635, "active_new": 18, "confirmed_new": 18, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 426, "recovered": 153, "deaths": 4, "active": 269, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 438, "recovered": 79, "deaths": 4, "active": 352, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 360, "recovered": 79, "deaths": 0, "active": 281, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 278, "recovered": 187, "deaths": 4, "active": 87, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 247, "recovered": 63, "deaths": 6, "active": 175, "active_new": -2, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 2}, {"state": "Tripura", "confirmed": 232, "recovered": 165, "deaths": 0, "active": 67, "active_new": 23, "confirmed_new": 23, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 67, "recovered": 28, "deaths": 0, "active": 39, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 53, "recovered": 43, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 49, "recovered": 17, "deaths": 0, "active": 32, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 39, "recovered": 4, "deaths": 0, "active": 35, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 20, "recovered": 12, "deaths": 1, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 9, "recovered": 0, "deaths": 0, "active": 9, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];