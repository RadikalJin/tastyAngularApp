var data = [{

    starters: {
        1: {
            id: "1",
            title: "Hot Hors d’Oeuvres",
            description: "Crispy seaweed, vegetarian pancake roll (2), spare ribs (2). Chicken on skewers (2), sesame prawn on toast",
            pricing: "For two: £7.00, For three: £10.00 For four: £13.00"
        },
        2: {
            id: "2",
            title: "Spare Ribs",
            description: "(2) Barbecued Pork Spare Ribs, (3) In wild honey sauce, (4) Dry, (5) Chilli & Spicy Salt*, (6) Capital sauce",
            pricing: "£4.90"
        },
        3: {
            id: "7",
            title: "Crispy Fried Dumplings",
            pricing: "£3.60"
        }
    }
    /*
     7      Crispy Fried Dumplings (4) £3.60
     8      Mini Pancake Rolls (6) £3.20
     9      Sesame Prawn on Toast £3.20
     10    Grilled Peking Dumplings (minced pork) served with ginger & vinegar (4) £3.00
     11    Crispy Won Ton (8) with sweet & sour sauce £2.70
     12    Vegetarian Pancake Roll (6) £3.00
     13    Crispy Seaweed (with fish flakes) £2.70
     14    Pancake Roll (2) £2.00
     15    Prawn Crackers £1.00

     CRISPY AROMATIC DISHES
     served with spring onions, cucumber, Hoi Sin sauce & pancake
     16    Crispy Aromatic Duck    ¼ £7.70    ½ £14.50    whole £26.50

     SOUP
     17    Crab Stick & Sweetcorn Soup £2.90
     18    Won Ton Soup £3.20
     19    Hot & Sour Soup* £2.70
     20    Chicken & Sweetcorn Soup £2.40
     21    Chicken & Mushroom Soup £2.40
     22    Chicken & Noodle Soup £2.40
     23    Mixed Vegetable Soup £2.20

     SATAY spicy peanut sauce – 4 skewers
     24    King Prawn Satay £5.20
     25    Chicken Satay £4.50
     26    Beef Satay £4.50
     27    Squid Satay £4.60
     28    Mushroom Satay £3.30

     SWEET & SOUR DISHES
     29    House Special £5.00
     4 king prawn balls, 4 chicken balls, 4 pork balls
     30    Sweet & Sour Spare Ribs £4.90
     31    Sweet & Sour King Prawn Hong Kong Style £5.10
     32    Sweet & Sour King Prawn Balls (10) £5.10
     33    Sweet & Sour Chicken Balls (10) £4.20
     34    Sweet & Sour Chicken Hong Kong Style £4.40
     35    Sweet & Sour Chicken (sliced) £4.40
     36    Sweet & Sour Squid £4.80
     37    Sweet & Sour Pork Balls (12) £4.20
     38    Sweet & Sour Pork Hong Kong Style £4.20
     39    Sweet & Sour Mixed Vegetables £3.20

     CURRY DISHES rice not included
     40    House Special Curry £4.90
     41    King Prawn Curry £5.10
     42    Roast Duck Curry £4.90
     43    Chicken Curry £4.30
     44    Beef Curry £v4.30
     45    Roast Pork Curry £4.30
     46    Shrimp Curry £4.30
     47    Mushroom Curry £3.90
     48    Mixed Vegetable Curry £3.90

     CHICKEN DISHES
     49    Crispy Chicken in Orange Sauce £4.50
     50    Crispy Chicken in Lemon Sauce £4.50
     51    Deep Fried Chicken with Chilli & Salt* £4.40
     52    Szechuan Style Chicken* £4.40
     53    Kung Po Chicken (with cashew nuts)* £4.40
     54    Chicken with Green Pepper in Black Bean Sauce £4.40
     55    Chicken with Ginger & Spring Onions £4.40
     56    Chicken with Mixed Vegetables £4.40
     57    Chicken with Mushrooms £4.40
     58    Chicken with Fresh Hot Chilli £4.40
     59    Chicken in Oyster Sauce £4.40
     60    Chicken with Pineapple £4.40
     61    Chicken with Tomato £4.40
     62    Chicken with Cashew Nuts £4.40
     63    Chicken with Cashew Nuts in Yellow Bean Sauce £4.40
     64    Chicken with Broccoli £4.40
     65    Chicken Mange Tout in Oyster Sauce £4.40
     66    Chicken with Bamboo Shoot & Water Chestnuts £4.40
     67    Chicken (Chinese style) £4.40
     68    Chicken with Honey in Hot Chilli £4.40
     69    Crispy Shredded Chicken with Chilli £4.40
     70    Deep Fried Chicken with Garlic & Butter £4.40
     71    Deep Fried Chicken with Garlic & Chilli Sauce £4.40

     BEEF DISHES
     72    Fillet Steak Cantonese Style £7.00
     73    Fillet Steak Szechuan Style £7.00
     74    Fillet Steak in Black Bean Sauce* £7.00
     75    Fillet Steak with Garlic & Chilli Sauce* £7.00
     76    Beef with Honey in Hot Chilli* £4.50
     77    Crispy Shredded Beef with Chilli* £4.60
     78    Szechuan Style Beef *£4.50
     79    Kung Po Beef (with cashew nuts)* £4.50
     80    Beef with Garlic & Chilli Sauce* £4.50
     81    Beef with Green Peppers in Black Bean Sauce* £4.50
     82    Beef with Ginger & Spring Onions £4.50
     83    Beef with Mixed Vegetables £4.50
     84    Beef with Mange Tout in Oyster Sauce £4.50
     85    Beef with Mushrooms £4.50
     86    Beef in Oyster Sauce £4.50
     87    Beef with Tomato £4.50
     88    Beef with Cashew Nuts £4.50
     89    Beef with Bamboo Shoot & Water Chestnuts £4.50

     PORK DISHES
     90    Szechuan Style Roast Pork* £4.40
     91    Kung Po Roast Pork (with cashew nuts)* £4.40
     92    Roast Pork with Green Pepper in Black Bean Sauce £4.40
     93    Roast Pork with Ginger & Spring Onions £4.40
     94    Roast Pork with Mixed Vegetables £4.40
     95    Roast Pork with Mushrooms £4.40
     96    Roast Pork in Oyster Sauce £4.40
     97    Roast Pork with Tomato £4.40
     98    Roast Pork with Cashew Nuts £4.40
     99    Roast Pork with Bamboo Shoot & Water Chestnuts £4.40
     100  Roast Pork (Chinese style) £4.40
     101  Roast Pork with Honey in Hot Chilli* £4.40
     102  Roast Pork with Mange Tout in Oyster Sauce £4.40
     103  Deep Fried Pork with Garlic & Chilli Sauce £4.40

     SEAFOOD DISHES
     104  Szechuan Style King Prawn* £5.10
     105  Kung Po King Prawn (with cashew nuts)*£5.10
     106  King Prawn with Green Pepper in Black Bean Sauce £5.10
     107  King Prawn with Ginger & Spring Onions £5.10
     108  King Prawn with Mixed Vegetables £5.10
     109  King Prawn with Mange Tout in Oyster Sauce £5.10
     110  King Prawn with Mushrooms £5.10
     111  King Prawn in Oyster Sauce £5.10
     112  King Prawn with Pineapple £5.10
     113  King Prawn with Tomato £5.10
     114  King Prawn with Cashew Nuts £5.10
     115  King Prawn with Garlic & Chilli Sauce £5.10
     116  King Prawn with Cashew Nuts in Yellow Bean Sauce £5.10
     117  King Prawn with Bamboo Shoot & Water Chestnuts £5.10
     118  King Prawn with Honey in Hot Chilli* £5.10
     119  Deep Fried King Prawn with Chilli & Salt* £5.10
     120  Deep Fried King Prawn with Garlic & Butter £5.10
     121  Grilled King Prawn with Fresh Hot Chilli*£5.10
     122  Szechuan Style Squid £4.80
     123  Squid with Green Pepper in Black Bean Sauce £4.80
     124  Squid with Ginger & Spring Onions £4.80
     125  Deep Fried Squid with Honey in Hot Chilli* £4.80
     126  Deep Fried Squid with Chilli & Salt* £4.80
     127  Deep Fried Squid with Garlic & Chilli Sauce* £4.80

     DUCK DISHES
     128  Szechuan Style Roast Duck* £5.00
     129  Roast Duck with Green Pepper in Black Bean Sauce* £5.00
     130  Roast Duck with Ginger & Spring Onions £5.00
     131  Roast Duck with Mixed Vegetables £5.00
     132  Roast Duck with Mushrooms £5.00
     133  Roast Duck in Oyster Sauce £5.00
     134  Roast Duck with Pineapple £5.00
     135  Roast Duck with Cashew Nuts £5.00
     136  Roast Duck with Bamboo Shoot & Water Chestnuts £5.00
     137  Roast Duck (Chinese style) £5.00
     138  Roast Duck in Lemon Sauce £5.00
     139  Roast Duck in Orange Sauce £5.00
     140  Grilled Duck in a Wild Honey Sauce £5.00
     141  Roast Duck with Garlic & Chilli Sauce* £5.00

     NEW DISHES
     142  Crispy Samosa (5) £3.10
     143  Nasi Goreng (Malaysian Fried Rice with King Prawn,
     Finely chopped Vegetables, Egg, Light Soy Sauce with Chilli Spice)* £4.90
     144  Fried Rice with Roast Duck Cantonese Style £4.60
     145  Fried Rice with Roast Pork Cantonese Style £4.40

     QUORN DISHES (v)
     146  Curry Quorn £4.70
     147  Sweet & Sour Quorn Hong Kong Style £4.70
     148  Szechuan Style Quorn* £4.70
     149  Kung Po Quorn* £4.70
     150  Quorn with Green Pepper in Black Bean Sauce £4.70
     151  Quorn with Ginger & Spring Onions £4.70
     152  Quorn with Mixed Vegetables £4.70
     153  Quorn with Mushrooms £4.70
     154  Quorn with Pineapple £4.70
     155  Quorn with Cashew Nuts £4.70
     156  Quorn with Honey in Hot Chilli* £4.70
     157  Quorn with Garlic & Chilli Sauce* £4.70

     TOFU (v)
     158  Tofu with Mixed Vegetables £4.00
     159  Tofu Szechuan Style* £4.00
     160  Tofu with Garlic & Chilli Sauce* £4.00
     161  Tofu with Garlic Peppers & Chilli Black Bean Sauce* £4.00
     162  Salt & Pepper Tofu £4.00
     163  Kung Po Tofu* £4.00
     164  Tofu in Wild Honey Chilli Sauce* £4.00
     165  Tofu in Sweet & Sour Sauce £4.00

     CHOP SUEY DISHES
     166  King Prawn Chop Suey £5.00
     167  House Special Chop Suey £4.70
     168  Chicken Chop Suey £4.10
     169  Shrimp Chop Suey £4.10
     170  Beef Chop Suey £4.10
     171  Roast Pork Chop Suey £4.10
     172  Mushroom Chop Suey £3.60

     CHOW MEIN (noodles)
     173  House Special Chow Mein £5.40
     King prawn, chicken, roast pork & beef with mixed vegetables in gravy
     174  King Prawn Chow Mein £4.90
     175  Szechuan Style Chow Mein* £4.40
     176  Roast Duck Chow Mein £4.20
     177  Spicy Singapore Chow Mein* £4.20
     178  Special Chow Mein £4.00
     179  Chicken Chow Mein £3.90
     180  Beef Chow Mein £3.90
     181  Roast Pork Chow Mein £3.90
     182  Shrimp Chow Mein £3.90
     183  Mixed Vegetable Chow Mein £3.60
     184  Mushroom Chow Mein £3.60
     185  Plain Chow Mein £2.80

     RICE NOODLE DISHES
     186  House Special Rice Noodles £5.40
     king prawn, chicken, roast pork & beef with mixed vegetables in gravy
     187  King Prawn Rice Noodles £5.00
     188  Szechuan Style Rice Noodles* £4.40
     189  Spicy Singapore Rice Noodles* £4.20
     190  Chicken Rice Noodles £3.90
     191  Beef Rice Noodles £3.90
     192  Roast Pork Rice Noodles £3.90
     193  Shrimp Rice Noodles £3.90
     194  Mixed Vegetable Rice Noodles £3.60
     195  Mushroom Rice Noodles £3.60
     196  Plain Rice Noodles £2.80

     UDON DISH (Japanese noodles)
     197  King Prawn with Mixed Vegetable Udon £5.40
     198  Special Udon £4.90
     199  Chicken Udon £4.60
     200  Beef Udon £4.60
     201  Roast Pork Udon £4.60
     202  Shrimp Udon £4.60
     203  Mixed Vegetable Udon £4.60

     RICE DISHES
     204  House Special Rice £5.40
     king prawn,chicken, roast pork, beef with mixed vegetables in gravy
     205  King Prawn Fried Rice £5.00
     206  Roast Duck Fried Rice £4.50
     207  Spicy Singapore Fried Rice* £4.20
     208  Special Fried Rice £4.00
     209  Fried Rice with Pineapple & Cashew Nuts (v) £3.80
     210  Chicken Fried Rice £3.70
     211  Beef Fried Rice £3.70
     212  Roast Pork Fried Rice £3.70
     213  Shrimp Fried Rice £3.70
     214  Mixed Vegetable Fried Rice £3.60
     215  Mushroom Fried Rice £3.60
     216  Egg Fried Rice £2.60
     217  Plain Boiled Rice £2.30

     CHICKEN WING DISHES
     218  Szechuan Style Chicken Wings (6 pcs) £3.70
     219  Peking Style Chicken Wings (6 pcs) £3.70
     220  Salt & Chilli Chicken Wings* (6 pcs) £3.70
     221  Sweet & Sour Chicken Wings (6 pcs) £3.70
     222  Chicken Wings with Honey in Hot Chilli* (6 pcs) £3.70
     223  Plain Chicken Wings (6 pcs) £3.20
     224  Chicken Wings with Garlic & Chilli Sauce* (6 pcs) £3.70

     THAI STYLE DISHES
     225  Thai Red or Green King Prawn Curry £6.20
     226  Thai Red or Green Special Curry £5.70
     227  Thai Red or Green Chicken Curry £5.40
     228  Thai Red or Green Beef Curry £5.40
     229  Thai Red or Green Roast Pork Curry £5.40
     230  Barbecued Ribs in Sweet & Chilli Sauce* £5.40

     EGG FOO YOUNG DISHES (fried egg)
     231  King Prawn Foo Young £5.00
     232  Special Foo Young £4.10
     233  Chicken Foo Young £3.90
     234  Shrimp Foo Young £3.90
     235  Roast Pork Foo Young £3.90
     236  Mushroom Foo Young £3.60

     ENGLISH DISHES (with chips & peas)
     237  King Prawn Omelette £5.00
     238  Special Omelette £4.40
     239  Sliced Chicken Breast with Chips in Barbecue Sauce £4.10
     240  Chicken Omelette £4.10
     241  Shrimp Omelette £4.10
     242  Roast Pork Omelette £4.10
     243  Mushroom Omelette £3.90
     244  Plain Omelette £3.60

     EXTRAS
     245  Stir Fried Mixed Vegetables £3.00
     246  Stir Fried Vegetables with Chilli Black Bean Sauce £3.00
     247  Stir Fried Bamboo Shoot & Water Chestnuts £3.00
     248  Stir Fried Bean Sprouts £3.00
     249  Stir Fried Onion £3.00
     250  Stir Fried Mushrooms £3.00
     251  Chips in Sweet & Sour Sauce £2.20
     252  Chips in Barbecue Sauce £2.20
     253  Chips in Curry Sauce £2.20
     254  Chips £1.30
     255  Chilli Oil* £1.20
     256  Hoi Sin Sauce £1.20
     257  Curry Sauce £1.20
     258  Sweet & Sour Sauce £1.20
     259  Barbecue Sauce £1.20
     260  Satay Sauce £1.50
     261  Bottle of Soy Sauce £1.20
     262  Banana Fritter £1.70
     263  Pineapple Fritter £1.70
     264  Apple Fritter £1.70


     SET MEALS

     A For One Person £7.50
     Sweet & Sour Chicken Balls (6)

     (Choose one of the following below)
     Chicken Chow Mein OR
     Chicken with Mixed Vegetables in Oyster Sauce
     Braised Beef with Mushrooms

     Fried Rice with Egg

     B For Two Persons £18.60 / For Three Persons £26.80 / For Four Persons £34.60
     Barbecued Spare Ribs
     Sweet & Sour Chicken Hong Kong Style
     King Prawns with Mushrooms
     Roast Chicken Chinese Style
     Special Fried Rice

     C For Two Persons £22.30 / For Three Persons £31.80 / For Four Persons £41.30
     Crispy Aromatic Duck
     Crispy Shredded Chilli Beef
     Chicken in Black Bean Sauce
     Stir Fried Chinese Mixed Vegetables
     Special Fried Rice
     Pancake Rolls

     D For Two Persons £24.30 / For Three Persons £34.80 / For Four Persons £44.80
     Hot Hors d’Oeuvres
     Stir Fried Chicken with Spring Onions & Ginger
     Sweet & Sour Pork Hong Kong Style
     Roast Duck Cantonese Style
     Special Fried Rice
     King Prawns Szechuan Style*

     E For Two Persons £28.20 / For Three Persons £38.80 / For Four Persons £53.00
     Crispy Aromatic Duck
     Barbecued Spare Ribs
     King Prawns with Chilli Honey Sauce
     Chicken Szechuan Style*
     Fried Crispy Shredded Beef
     Special Fried Rice
     Special Chow Mein

     F For Two Persons £30.30 / For Three Persons £39.00 / For Four Persons £52.80
     Mixed Hors d’Oeuvres
     Crispy Aromatic Duck
     Honey Lemon Chicken
     Chicken with Spring Onions & Ginger
     King Prawns Szechuan Style*
     Crispy Shredded Chilli Beef*
     Special Fried Rice

     */


}]