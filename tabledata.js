const tableDataNested = [{"state": "Maharashtra", "confirmed": 35058, "recovered": 8437, "deaths": 1249, "active": 25372, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Tamil Nadu", "confirmed": 12448, "recovered": 4895, "deaths": 85, "active": 7468, "active_new": 196.0, "confirmed_new": 688.0, "recovered_new": 489.0, "deaths_new": 3.0}, {"state": "Gujarat", "confirmed": 12141, "recovered": 5043, "deaths": 719, "active": 6379, "active_new": 131.0, "confirmed_new": 395.0, "recovered_new": 239.0, "deaths_new": 25.0}, {"state": "Delhi", "confirmed": 10554, "recovered": 4750, "deaths": 166, "active": 5638, "active_new": 229.0, "confirmed_new": 500.0, "recovered_new": 265.0, "deaths_new": 6.0}, {"state": "Rajasthan", "confirmed": 5757, "recovered": 3232, "deaths": 139, "active": 2386, "active_new": 235.0, "confirmed_new": 250.0, "recovered_new": 14.0, "deaths_new": 1.0}, {"state": "Madhya Pradesh", "confirmed": 5465, "recovered": 2631, "deaths": 258, "active": 2576, "active_new": 27.0, "confirmed_new": 229.0, "recovered_new": 196.0, "deaths_new": 6.0}, {"state": "Uttar Pradesh", "confirmed": 4605, "recovered": 2783, "deaths": 118, "active": 1704, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "West Bengal", "confirmed": 2961, "recovered": 1074, "deaths": 250, "active": 1637, "active_new": 62.0, "confirmed_new": 136.0, "recovered_new": 68.0, "deaths_new": 6.0}, {"state": "Andhra Pradesh", "confirmed": 2489, "recovered": 1621, "deaths": 52, "active": 816, "active_new": -14.0, "confirmed_new": 57.0, "recovered_new": 69.0, "deaths_new": 2.0}, {"state": "Punjab", "confirmed": 2002, "recovered": 1642, "deaths": 38, "active": 322, "active_new": -74.0, "confirmed_new": 22.0, "recovered_new": 95.0, "deaths_new": 1.0}, {"state": "Telangana", "confirmed": 1634, "recovered": 1011, "deaths": 38, "active": 585, "active_new": 29.0, "confirmed_new": 42.0, "recovered_new": 9.0, "deaths_new": 4.0}, {"state": "Bihar", "confirmed": 1495, "recovered": 517, "deaths": 9, "active": 969, "active_new": 28.0, "confirmed_new": 72.0, "recovered_new": 44.0, "deaths_new": 0.0}, {"state": "Jammu and Kashmir", "confirmed": 1317, "recovered": 647, "deaths": 17, "active": 653, "active_new": -12.0, "confirmed_new": 28.0, "recovered_new": 38.0, "deaths_new": 2.0}, {"state": "Karnataka", "confirmed": 1395, "recovered": 543, "deaths": 40, "active": 811, "active_new": 133.0, "confirmed_new": 149.0, "recovered_new": 13.0, "deaths_new": 3.0}, {"state": "Haryana", "confirmed": 964, "recovered": 627, "deaths": 14, "active": 323, "active_new": 7.0, "confirmed_new": 36.0, "recovered_new": 29.0, "deaths_new": 0.0}, {"state": "Odisha", "confirmed": 978, "recovered": 307, "deaths": 5, "active": 666, "active_new": 71.0, "confirmed_new": 102.0, "recovered_new": 30.0, "deaths_new": 1.0}, {"state": "Kerala", "confirmed": 643, "recovered": 497, "deaths": 4, "active": 142, "active_new": 12.0, "confirmed_new": 12.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Jharkhand", "confirmed": 233, "recovered": 127, "deaths": 3, "active": 103, "active_new": 5.0, "confirmed_new": 5.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Chandigarh", "confirmed": 199, "recovered": 57, "deaths": 3, "active": 139, "active_new": 0.0, "confirmed_new": 3.0, "recovered_new": 3.0, "deaths_new": 0.0}, {"state": "Tripura", "confirmed": 165, "recovered": 116, "deaths": 0, "active": 49, "active_new": -27.0, "confirmed_new": 0.0, "recovered_new": 27.0, "deaths_new": 0.0}, {"state": "Assam", "confirmed": 155, "recovered": 42, "deaths": 4, "active": 107, "active_new": 39.0, "confirmed_new": 39.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Uttarakhand", "confirmed": 111, "recovered": 52, "deaths": 1, "active": 58, "active_new": 8.0, "confirmed_new": 8.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Himachal Pradesh", "confirmed": 90, "recovered": 45, "deaths": 3, "active": 39, "active_new": -3.0, "confirmed_new": 0.0, "recovered_new": 3.0, "deaths_new": 0.0}, {"state": "Chhattisgarh", "confirmed": 95, "recovered": 59, "deaths": 0, "active": 36, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Ladakh", "confirmed": 43, "recovered": 43, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Goa", "confirmed": 46, "recovered": 7, "deaths": 0, "active": 39, "active_new": 8.0, "confirmed_new": 8.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Puducherry", "confirmed": 22, "recovered": 10, "deaths": 0, "active": 12, "active_new": 4.0, "confirmed_new": 5.0, "recovered_new": 1.0, "deaths_new": 0.0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 12, "deaths": 1, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Manipur", "confirmed": 7, "recovered": 2, "deaths": 0, "active": 5, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0.0, "confirmed_new": 0.0, "recovered_new": 0.0, "deaths_new": 0.0}, {"state": "State Unassigned", "confirmed": 814, "recovered": 0, "deaths": 0, "active": 814, "active_new": null, "confirmed_new": null, "recovered_new": null, "deaths_new": null}];