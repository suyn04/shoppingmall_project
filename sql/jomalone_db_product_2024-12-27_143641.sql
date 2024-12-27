-- Active: 1733101713787@@127.0.0.1@3306@jomalone_db

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name_kor` varchar(255) NOT NULL,
  `product_name_eng` varchar(255) NOT NULL,
  `product_special` varchar(50) DEFAULT NULL,
  `product_category_id` int(11) NOT NULL,
  `product_scent` varchar(50) NOT NULL,
  `product_group_scent` varchar(50) DEFAULT NULL,
  `product_status` tinyint(1) NOT NULL,
  `product_intro` text NOT NULL,
  `product_ingredient` text NOT NULL,
  `product_top` int(11) DEFAULT NULL,
  `product_heart` int(11) DEFAULT NULL,
  `product_base` int(11) DEFAULT NULL,
  `product_reg_date` datetime NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `product` VALUES
(1,'라임 바질 앤 만다린 코롱','Lime Basil & Mandarin Cologne','Best Seller',1,'citrus','라임 바질 앤 만다린',1,'조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다. ','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Amyl Cinnamal, Geraniol, Citronellol, Benzyl Salicylate, Hexyl Cinnamal, Eugenol, Benzyl Benzoate <ILN49337>',1,2,3,'2024-12-02 00:00:00'),
(2,'그레이프프루트 코롱','Grapefruit Cologne','New',1,'citrus','그레이프프루트',1,'스페인 해안의 수많은 자몽 과수원. 자몽의 밝고 명랑한 느낌에 로즈마리, 페퍼민트, 피멘토의 톡 쏘는 향을 더했습니다. 산뜻한 느낌, 기분이 좋아지는 향수입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Geraniol, Citral, Eugenol, Alpha-Isomethyl Ionone, Coumarin, Amyl Cinnamal, Citronellol, Bht <ILN49332>',4,5,6,'2024-12-02 00:00:00'),
(3,'얼 그레이 앤 큐컴버 코롱','Earl Grey & Cucumber Cologne','',1,'citrus',NULL,1,'영국의 전통인 애프터눈 티. 얼 그레이 티에 프루티 아로마 향을 더욱 강조해주는 베르가못과 시원한 오이의 향을 더했습니다. 비즈왁스와 바닐라의 베이스가 달콤함을 가져다 줍니다.','변성알코올, 정제수, 향료, 리날룰, 리모넨, 이소유제놀, 제라니올, 시트랄 [ILN36747]',7,8,9,'2024-12-04 11:11:37'),
(4,'잉글리쉬 페어 앤 프리지아 코롱','English Pear & Freesia Cologne',NULL,1,'fruity',NULL,1,'가을의 정수. 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로 은은함을 더했습니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Farnesol, Limonene, Geraniol, Linalool, Hexyl Cinnamal, Citronellol, Citral, Bht, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate <ILN98998>',10,11,12,'2024-12-04 12:06:59'),
(5,'와일드 블루벨 코롱','Wild Bluebell Cologne',NULL,1,'light-floral',NULL,1,'숲 속 깊은 곳에서 빛나고 있는 사파이어. 이슬 맺힌 블루벨의 은은하고 달콤한 향에 릴리와 들장미 향의 조화가 최면을 걸 듯 마음을 사로잡습니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',13,14,15,'2024-12-04 13:31:40'),
(6,'허니서클 앤 다바나 코롱','Honeysuckle & Davana Cologne',NULL,1,'floral',NULL,1,'영국 전원 지대에 물결치듯이 피어 오르는 야생 허니서클은 휘감듯이 피어 오르며 어둠이 깔리면 더욱 매력적으로 빛납니다. 과일 향의 반전을 지닌 다바나의 아로마 향, 여기에 로즈 향이 가미되어 더욱 신선해 집니다. 모스는 향에 우디함을 더해 줍니다. 햇살을 담아 따뜻해진 향. 선명하고 화사한 행복감을 표현하는 향입니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015]',16,17,6,'2024-12-04 13:45:06'),
(7,'포머그래니트 누와 코롱','Pomegranate Noir Cologne',NULL,1,'woody',NULL,1,'대담한 레드 드레스의 관능미. 석류, 라즈베리, 자두를 섞은 짙은 다홍색 주스에 핑크 페퍼를 넣고 카사블랑카 백합과 숲의 향기를 더했습니다. 어둡고 불가사의한 느낌의 향수입니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',18,19,20,'2024-12-04 13:52:02'),
(17,'우드 세이지 앤 씨 솔트 코롱','Wood Sage & Sea Salt Cologne',NULL,1,'woody',NULL,1,'바람부는 해안을 따라 걸으며 일상을 벗어나보세요. 하얗게 부서지는 파도, 소금기를 머금은 신선한 바다 공기. 험준한 절벽에서 느껴지는 투박한 자연의 향기와 세이지의 우디한 흙 내음이 어우러져 자유롭고 활기찬 에너지와 즐거움이 가득합니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',21,22,23,'2024-12-04 15:55:39'),
(21,'바질 앤 네롤리 홈 캔들','Basil & Neroli Home Candle',NULL,2,'citrus',NULL,1,'런던의 모습을 그대로 담은 장난스럽고도 사랑스러운 향. 플로럴 향이 풍부한 네롤리에 바질의 기분 좋은 향이 더해져 즐거운 모험이 가득한 영국만의 독특한 향을 냅니다. 기분을 고조시키거나 긴장을 풀기 위해, 또는 단순히 고급스러운 느낌을 더하고 싶을 때 사용해 보세요. 캔들이 타면서 퍼지는 향이 즉각적으로 방 안을 가득 메워 매력적인 분위기를 연출해 줍니다. 홈 캔들은 45시간동안 지속되며 실버 덮개와 함께 판매됩니다. 캔들 용량은 200g입니다.','화장품 아님 / 파라핀, 향초 / 자가검사번호 F-A09B-T025002-A150',NULL,NULL,NULL,'2024-12-06 13:36:04'),
(22,'라임 바질 앤 만다린 디퓨저','Lime Basil & Mandarin Diffuser','',3,'citrus',NULL,1,'조 말론 런던의 모던한 클래식 제품으로 공간을 채워보세요. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요','에톡시디글라이콜,향료(리모넨 등) 자가검사번호: FB20-12-2207 ',0,0,0,'2024-12-06 13:47:35'),
(23,'그레이프프루트 바디 앤 핸드 워시','Grapefruit Body & Hand Wash',NULL,4,'citrus',NULL,1,'기분 좋은 그레이프프루트 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 깨끗하게 만들어 줍니다. 기분 좋은 시트러스 향을 피부에 은은하게 남겨보세요.','ngredients: Water\\Aqua\\Eau, Sodium Laureth Sulfate, Lauramidopropyl Betaine, Peg-7 Glyceryl Cocoate, Fragrance (Parfum), Glycerin, Sucrose, Limnanthes Alba (Meadowfoam) Seed Oil, Caffeine, Ethylhexylglycerin, Caprylyl Glycol, Peg-6 Caprylic/Capric Glycerides, Sodium Chloride, Peg-120 Methyl Glucose Dioleate, Polysorbate 20, Peg-150 Pentaerythrityl Tetrastearate, Pentylene Glycol, Hexylene Glycol, Polyquaternium-7, Magnesium Nitrate, Citric Acid, Geraniol, Limonene, Linalool, Citral, Eugenol, Bht, Sodium Benzoate, Methylchloroisothiazolinone, Methylisothiazolinone, Phenoxyethanol <ILN49499>',NULL,NULL,NULL,'2024-12-06 14:57:02'),
(24,'라임 바질 앤 만다린 바디 크림','Lime Basil & Mandarin Body Creme',NULL,7,'citrus',NULL,1,'풍부한 영양을 선사하는 라임 바질 앤 만다린 바디 크림으로 당신의 데일리 루틴을 완성해보세요. 코코아 버터와 스위트 아몬드 오일이 함유되어 부드러운 질감의 포뮬러가 피부에 촉촉한 보습 효과를 선사합니다. 매력적이면서도 풍미 넘치는 향을 피부에 은은하게 남겨보세요.','Ingredients: Water\\Aqua\\Eau, Glycerin, Cetearyl Alcohol, Simmondsia Chinensis (Jojoba) Seed Oil, Glyceryl Stearate, Stearic Acid, Fragrance (Parfum), Triethanolamine, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Theobroma Cacao (Cocoa) Seed Butter, Bisabolol, Caffeine, Dimethicone, Isopropyl Palmitate, Aloe Barbadensis Leaf Juice, Glyceryl Laurate, Cocamidopropyl Pg-Dimonium Chloride Phosphate, Caprylyl Glycol, Hexylene Glycol, Geraniol, Amyl Cinnamal, Benzyl Salicylate, Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Disodium Edta, Phenoxyethanol <ILN49220>',NULL,NULL,NULL,'2024-12-06 15:38:42'),
(26,'잉글리쉬 페어 앤 프리지아 센티드 캔들','English Pear & Freesia Scented Candle',NULL,2,'fruity',NULL,1,'갓 익은 배를 빚어낸 금색 햇빛이 가득한 과수원의 느낌을 공간에 채워보세요. 갓 익은 배의 관능적인 산뜻함을 우아한 화이트 프리지아가 감싸줍니다. 영국 교외에서 정교하게 만들어 시그니처 디자인 글라스에 담아 완성합니다.','화장품 아님 / 파라핀, 향료 / 자가검사번호 : F-A09B-T025002-A150',NULL,NULL,NULL,'2024-12-11 11:54:18'),
(27,'와일드 블루벨 센티드 캔들','Wild Bluebell Scented Candle',NULL,2,'light-floral',NULL,1,'그늘진 한적한 숲 속에서 살며시 피어난 사파이어처럼 푸르게 빛나는 꽃으로 공간을 채워보세요. 영국 교외에서 정교하게 만들어 시그니처 디자인 글라스에 담아 완성합니다.','화장품 아님 / 파라핀, 향료 자가검사번호 : F-A09B-T00250002-A151A ',NULL,NULL,NULL,'2024-12-11 12:04:34'),
(29,'피오니 앤 블러쉬 스웨이드 코롱','Peony & Blush Suede Cologne','Best Seller',1,'floral',NULL,1,'꽃의 귀족, 작약의 화려함을 담은 향. 화려하게 핀 작약에 더해진 붉은 사과의 향기로운 과즙과 순수한 자스민, 장미 그리고 카네이션, 블러쉬 스웨이드의 부드러운 관능미가 여운을 남깁니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015]',24,25,26,'2024-12-17 11:40:22'),
(30,'히노키 앤 시더우드 코롱 인텐스','Hinoki & Cedarwood Cologne Intense',NULL,1,'woody',NULL,1,'삼림욕을 하다 마주친 땅 속 깊이 자리 잡은 오래된 편백나무.깔끔한 느낌의 아로마 노트와 강렬한 우디 노트가 어우러지며 우아한 시더우드(삼나무)와 히노키(편백나무)의 강렬함으로 이어집니다. 매우 신선하고 특별한 향입니다.','변성알코올,향료,정제수,에칠헥실메톡시신나메이트,부틸메톡시디벤조일메탄,에칠헥실살리실레이트,쿠마린,리날룰,신남알,리모넨,유제놀,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트 [ILN52653]',27,28,29,'2024-12-17 11:48:51'),
(31,'잉글리쉬 페어 앤 프리지아 익스폴리에이팅 샤워 젤','English Pear & Freesia Exfoliating Shower Gel',NULL,5,'fruity',NULL,1,'생기 넘치는 잉글리쉬 페어 앤 프리지아 익스폴리에이팅 샤워 젤로 당신의 데일리 루틴을 완성해보세요. 호호바와 대나무줄기 추출물이 함유된 익스폴리에이팅 포뮬러가 불순물을 부드럽게 제거하고 피부를 깨끗하게 세정하고 정돈해줍니다. 감미로운 프루티 향을 피부에 은은하게 남겨보세요.','메칠클로로이소치아졸리논,메칠이소치아졸리논,소듐벤조에이트,페녹시에탄올,소듐하이드록사이드,글리세린,다이소듐이디티에이,리모넨,마그네슘나이트레이트,비에이치티,세테스-20,소듐라우레스설페이트,소듐코코피지-다이모늄클로라이드포스페이트,아크릴레이트코폴리머,암모늄라우릴설페이트,이디티에이,제라니올,코코-베타인,펜타에리스리틸테트라-다이-t-부틸하이드록시하이드로신나메이트,폴리솔베이트20,피이지-7글리세릴코코에이트,하이드로제네이티드캐스터오일,하이드로제네이티드호호바오일,헥실신남알,향료,가시대나무줄기추출물,정제수 [ILN48624]',NULL,NULL,NULL,'2024-12-19 14:46:09'),
(33,'우드 세이지 앤 씨 솔트 디퓨저','Wood Sage & Sea Salt Diffuser',NULL,3,'woody',NULL,1,'소금기를 머금은 신선한 바다 공기와 험준한 절벽에서 느껴지는 미네랄 향. 바람 부는 영국 해변의 산뜻함으로 공간을 채워보세요. 10개의 라탄 리드가 포함되어 약 3~4달 동안 지속적으로 향을 즐길 수 있으며, 최적의 효과를 위해 10개의 리드를 동시에 사용해 주세요.\n','주요물질 다이프로필렌 글리콜 메틸 에테르 아세테이트, 트리프로필렌 글리콜 메틸 에테르, 향료(리날로올 등) 알레르기물질 리날로올, 리모넨, 벤질알코올, 시트랄, 시트로넬롤, 아밀신남알, 알파-이소메칠이오논, 쿠마린 기타물질 헥사하이드로-5,5-디메틸-2-프로필-2H-2,4a-메타노나프탈렌-1(5H)-온',NULL,NULL,NULL,'2024-12-20 17:34:58'),
(34,'우드 세이지 앤 씨 솔트 바디 앤 핸드 로션','Wood Sage & Sea Salt Body & Hand Lotion',NULL,8,'woody',NULL,1,'실크처럼 부드러운 우드 세이지 앤 씨 솔트 바디 앤 핸드 로션으로 당신의 데일리 루틴을 완성해보세요. 코코넛 오일과 히알루론산이 함유된 포뮬러가 쉽게 흡수되며 피부를 부드럽게 가꿔주고 보습 효과를 선사합니다. 밝고 섬세한 향을 피부에 은은하게 남겨보세요.\n','정제수,알로에베라잎즙,카프릴릭/카프릭/미리스틱/스테아릭트라이글리세라이드,부틸렌글라이콜,하이드로제네이티드폴리아이소부텐,피피지-5-세테스-20,향료,세틸아세테이트,코코넛야자오일,피이지-40스테아레이트,다이메티콘,글리세릴스테아레이트,소듐하이알루로네이트,글리세릴라우레이트,아이소프로필호호베이트,카프릴릴글라이콜,호호바알코올,호호바에스터,솔비탄스테아레이트,헥실렌글라이콜,트로메타민,카보머,리날룰,시트랄,리모넨,시트로넬올,제라니올,벤질알코올,쿠마린,알파-아이소메틸아이오논,토코페롤,비에이치티,다이소듐이디티에이,페녹시에탄올 [ILN99131]',NULL,NULL,NULL,'2024-12-20 17:36:58'),
(35,'피오니 앤 블러쉬 스웨이드 디퓨저','Peony & Blush Suede Diffuser',NULL,3,'floral',NULL,1,'매력적으로 활짝 핀 피오니로 장식된 영국 무도회장의 화려함처럼 공간을 채워보세요. 풍성한 질감의 캔들이 불빛에 반짝입니다. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요\n','다이에틸렌글리콜에틸에터, 향료(리날로올 등) 자가검사번호: FB19-12-0576 ',NULL,NULL,NULL,'2024-12-20 17:41:49'),
(36,'154 코롱','154 Cologne',NULL,1,'citrus',NULL,1,'조 말론 런던의 1호점이 위치한 런던의 거리. 만다린, 그레이프 프루트, 라벤더, 바질, 너트맥, 베티버와 같은 브랜드의 대표적인 성분들을 함유하고 있어, 다양한 느낌을 연출할 수 있는 향수입니다.','Ingredients: Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Alpha-Isomethyl Ionone, Hexyl Cinnamal, Eugenol, Coumarin, Cinnamal, Hydroxycitronellal, Citral, Geraniol, Benzyl Salicylate, Citronellol, Isoeugenol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate <ILN49452>',1,17,16,'2024-12-23 15:14:30'),
(37,'우드 세이지 앤 씨 솔트 바디 앤 핸드 로션','Wood Sage & Sea Salt Body & Hand Lotion','New',8,'woody',NULL,1,'실크처럼 부드러운 우드 세이지 앤 씨 솔트 바디 앤 핸드 로션으로 당신의 데일리 루틴을 완성해보세요. 코코넛 오일과 히알루론산이 함유된 포뮬러가 쉽게 흡수되며 피부를 부드럽게 가꿔주고 보습 효과를 선사합니다. 밝고 섬세한 향을 피부에 은은하게 남겨보세요','정제수,알로에베라잎즙,카프릴릭/카프릭/미리스틱/스테아릭트라이글리세라이드,부틸렌글라이콜,하이드로제네이티드폴리아이소부텐,피피지-5-세테스-20,향료,세틸아세테이트,코코넛야자오일,피이지-40스테아레이트,다이메티콘,글리세릴스테아레이트,소듐하이알루로네이트,글리세릴라우레이트,아이소프로필호호베이트,카프릴릴글라이콜,호호바알코올,호호바에스터,솔비탄스테아레이트,헥실렌글라이콜,트로메타민,카보머,리날룰,시트랄,리모넨,시트로넬올,제라니올,벤질알코올,쿠마린,알파-아이소메틸아이오논,토코페롤,비에이치티,다이소듐이디티에이,페녹시에탄올 [ILN99131]',0,0,0,'2024-12-26 14:30:18'),
(38,'우드 세이지 앤 씨 솔트 바디 미스트','Wood Sage & Sea Body Mist',NULL,10,'woody',NULL,1,'가볍게 사용할 수 있는 우드 세이지 앤 씨 솔트 바디 미스트로 데일리 루틴을 완성하세요. 글리세린과 피부 컨디셔닝 성분이 함유된 포뮬러가 피부에 쉽게 흡수되어 부드럽고 건강한 피부를 만들어 줍니다. 산뜻한 우디 향을 피부에 은은하게 남겨보세요.','변성알코올,피피지-3미리스틸에텔,옥틸도데칸올,향료,글리세린,정제수,스타이렌/브이피코폴리머,리날룰,알파-아이소메틸아이오논,리모넨,제라니올,시트로넬올,쿠마린,시트랄,벤질알코올,비에이치티,소르빅애씨드 [ILN50689] ',NULL,NULL,NULL,'2024-12-26 22:39:04'),
(39,'잉글리쉬 페어 앤 프리지아 바디 미스트','English Pear & Freesia Body Mist',NULL,10,'citrus',NULL,1,'가볍게 사용할 수 있는 잉글리쉬 페어 앤 프리지아 바디 미스트로 데일리 루틴을 완성하세요. 글리세린과 피부 컨디셔닝 성분이 함유된 포뮬러가 피부에 쉽게 흡수되어 부드럽고 건강한 피부를 만들어 줍니다. 감미로운 황금빛 프루티 향을 피부에 은은하게 남겨보세요.\n','Alcohol Denat., Ppg-3 Myristyl Ether, Octyldodecanol, Fragrance (Parfum), Glycerin, Water\\Aqua\\Eau, Styrene/Vp Copolymer, Geraniol, Hexyl Cinnamal, Limonene, Linalool, Farnesol, Bht, Sorbic Acid <ILN49097>',NULL,NULL,NULL,'2024-12-26 22:40:49'),
(40,'와일드 블루벨 바디 미스트','Wild Bluebell Body Mist',NULL,10,'light-floral',NULL,1,'가볍게 사용할 수 있는 와일드 블루벨 바디 미스트로 데일리 루틴을 완성하세요. 글리세린과 피부 컨디셔닝 성분이 함유된 포뮬러가 피부에 쉽게 흡수되어 부드럽고 건강한 피부를 만들어 줍니다. 화사하고 섬세한 플로랄 향을 피부에 은은하게 남겨보세요.\n','변성알코올,피피지-3미리스틸에텔,옥틸도데칸올,향료,글리세린,정제수,스타이렌/브이피코폴리머,헥실신남알,벤질살리실레이트,파네솔,비에이치티,소르빅애씨드 [ILN47952] ',NULL,NULL,NULL,'2024-12-26 22:42:22'),
(41,'블랙베리 앤 베이 핸드 크림','Blackberry & Bay Hand Cream',NULL,9,'fruity',NULL,1,'부드럽게 케어해주는 블랙베리 앤 베이 핸드 크림으로 데일리 루틴을 완성하세요. 히알루론산과 클라리 세이지 추출물이 함유된 포뮬러가 쉽게 흡수되어 피부를 보호하고 보습효과를 선사합니다. 진한 프루티 향을 피부에 은은하게 남겨보세요.\n','페녹시에탄올,글리세릴라우레이트,다이메티콘,다이소듐이디티에이,록샘파이어추출물,리날룰,리모넨,벤질살리실레이트,부틸렌글라이콜,세틸아세테이트,소듐하이알루로네이트,솔비탄스테아레이트,시트로넬올,알로에베라잎즙,아이소프로필호호베이트,카보머,카프릴릭/카프릭/미리스틱/스테아릭트라이글리세라이드,카프릴릭/카프릭트라이글리세라이드,카프릴릴글라이콜,코코넛야자오일,트로메타민,피이지-40스테아레이트,피피지-5-세테스-20,하이드로제네이티드폴리아이소부텐,헥실렌글라이콜,호호바에스터,정제수,향료,글리세릴스테아레이트,씨솔트,호호바알코올 [ILN41899] ',NULL,NULL,NULL,'2024-12-26 22:44:39'),
(42,'와일드 블루벨 핸드 크림','Wild Bluebell Hand Cream',NULL,9,'light-floral',NULL,1,'부드럽게 케어해주는 와일드 블루벨 핸드 크림으로 데일리 루틴을 완성하세요. 히알루론산과 클라리 세이지 추출물이 함유된 포뮬러가 쉽게 흡수되어 피부를 보호하고 보습효과를 선사합니다. 화사하고 섬세한 플로랄 향을 피부에 은은하게 남겨보세요.\n','소듐데하이드로아세테이트,페녹시에탄올,토코페릴아세테이트,포타슘하이드록사이드,글리세린,다이메티콘,다이소듐이디티에이,리날룰,리놀레익애씨드,리모넨,부틸렌글라이콜,부틸페닐메틸프로피오날,세틸알코올,소듐하이알루로네이트,솔비탄스테아레이트,시어버터,수크로오스,스테아릭애씨드,시트랄,아밀신남알,아보카도오일,아세틸글루코사민,알파-아이소메틸아이오논,에틸헥실글리세린,에틸헥실팔미테이트,제라니올,참나무이끼추출물,카보머,카페인,코코-카프릴레이트/카프레이트,콜레스테롤,클레리추출물,트레할로오스,하이드로제네이티드레시틴,하이드로제네이티드폴리아이소부텐,하이드록시시트로넬알,살구씨오일,정제수,향료 [ILN44113]',NULL,NULL,NULL,'2024-12-26 22:47:23'),
(43,'오렌지 블로썸 디퓨저','Orange Blossom Diffuser',NULL,3,'light-floral',NULL,1,'반짝이듯 만발한 플로랄 향으로 분위기를 한껏 끌어올려 보세요. 정원 속 오아시스의 꽃이 피고 있는 오렌지 나무 위로 내리쬐는 햇빛을 떠올리게 합니다. 10개의 라탄 리드가 포함되어 지속적으로 향을 즐길 수 있습니다. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요.','에톡시디글라이콜,향료(리날룰 등) 자가검사번호: FB20-12-2207',NULL,NULL,NULL,'2024-12-26 22:50:37'),
(44,'포머그래니트 누와 디퓨저','Pomegranate Noir Diffuser',NULL,3,'woody',NULL,1,'과즙 가득한 포머그래니트와 따뜻한 저녁 공기에 담긴 스모키한 과이액목의 향으로 공간을 채워보세요. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요\n','피피지-2메틸에터아세테이트,피피지-3메틸에터,향료(리날로올 등) / 자율안전확인신고확인증번호: 제FB19-12-0576 호 ',NULL,NULL,NULL,'2024-12-26 22:55:01'),
(45,'잉글리쉬 페어 앤 프리지아 디퓨저','English Pear & Freesia Diffuser',NULL,3,'fruity',NULL,1,'갓 익은 배를 빚어낸 금색 햇빛이 가득한 과수원의 느낌을 공간에 채워보세요. 갓 익은 배의 관능적인 산뜻함을 우아한 화이트 프리지아가 감싸줍니다. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요\n','피피지-2메틸에터아세테이트, 향료(벤질아세테이트 등) 자가검사번호: FB19-12-1490',NULL,NULL,NULL,'2024-12-26 22:56:54');

DROP TABLE IF EXISTS `product_category`;

CREATE TABLE `product_category` (
  `product_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_category_one` varchar(50) DEFAULT NULL,
  `product_category_two` varchar(50) DEFAULT NULL,
  `product_category_thr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`product_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `product_category` VALUES
(1,'cologne',NULL,NULL),
(2,'home-scents','candle',NULL),
(3,'home-scents','diffuser',NULL),
(4,'bath-body','bath-shower','body-hand-wash'),
(5,'bath-body','bath-shower','shower-gel-oil'),
(6,'bath-body','bath-shower','bath-oil'),
(7,'bath-body','body-care','body-cream'),
(8,'bath-body','body-care','body-hand-lotion'),
(9,'bath-body','body-care','hand-cream'),
(10,'bath-body','body-care','body-mist');


DROP TABLE IF EXISTS `product_note`;

CREATE TABLE `product_note` (
  `product_note_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_note_name` varchar(50) NOT NULL,
  `product_note_intro` text NOT NULL,
  `product_note_upSystem` varchar(255) DEFAULT NULL,
  `product_note_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_note_id`),
  UNIQUE KEY `product_note_name` (`product_note_name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `product_note` VALUES
(1,'만다린','밝고 새콤한 만다린이 라임의 톡 쏘는 향과 블렌딩되어 탑노트에 명랑한 상쾌함을 더해주는 향','note_mandarin.jpg','note_mandarin.jpg'),
(2,'바질','바질 허브의 따스함에 후추향이 스치며 경쾌한 시트러스 노트에 예상치 못한 반전을 주는 향','note_basil.jpg','note_basil.jpg'),
(3,'앰버우드','앰버(amber, 호박) 향의 우디 노트로 프레그런스에 계속 파고들게 되는 따뜻함을 더해주는 향','note_amberwood.jpg','note_amberwood.jpg'),
(4,'그레이프프루트','반짝이는 청량감으로 향이 전개되며, 약간의 쌉싸름하면서도 활기 넘치는 느낌을 줍니다.','note_grapefruit.jpg','note_grapefruit.jpg'),
(5,'로즈마리','라벤더, 캄포, 민트의 상쾌함이 투명한 느낌의 아로마틱 향을 선사합니다.','note_rosemary.jpg','note_rosemary.jpg'),
(6,'모스','모스의 파릇함이 향의 베이스에 흙 내음 나는 우디한 따뜻함을 표현해 줍니다.','note_moss.jpg','note_moss.jpg'),
(7,'베르가못','베르가못이 얼 그레이 티에 생기를 더해주며, 시트러스의 신선함으로 향을 밝고 환하게 만들어 줍니다.','note_bergamot.jpg','note_bergamot.jpg'),
(8,'큐컴버','시원하고 신선하며 살짝 크런치한 노트는 상쾌한 즙을 가득 머금고 있습니다','note_cucumber.jpg','note_cucumber.jpg'),
(9,'비즈왁스','깊이 있고 풍부한 애니멀릭 액센트에 토바코의 터치가 가미되어 고급스러운 달콤함을 선사합니다.','note_beeswax.jpg','note_beeswax.jpg'),
(10,'킹 윌리엄 페어','잘 영글은 신선한 배의 과즙에서 느껴지는 풍부하고 부드러운 과일향을 담았습니다.','note_kingwilliampear.jpg','note_kingwilliampear.jpg'),
(11,'프리지아','전형적인 브리티시 스타일. 새하얀 프리지아에서 느껴지는 섬세하고도 독특한 향이 미들 노트를 가득 채워줍니다.','note_freesia.jpg','note_freesia.jpg'),
(12,'파출리','감각적이면서도 깊고 우디한 노트로 잔향을 오래 지속시켜 줍니다.','note_patchouli.jpg','note_patchouli.jpg'),
(13,'블루벨','야생화의 향기에 산뜻한 그리너리의 향과 스파이시한 정향 싹의 발사믹한 달큰함, 그리고 스치듯 은은한 이슬의 투명한 향.','note_bluebell.jpg','note_bluebell.jpg'),
(14,'감','우윳빛 복숭아 노트에 깨끗하고 크리미한 향','note_persimmon.jpg','note_persimmon.jpg'),
(15,'화이트 머스크','파우더리하고 깨끗한 향이 부드러움을 더해 잔향의 지속력을 높여주는 향','note_whitehmusk.jpg','note_whitehmusk.jpg'),
(16,'다바나','감초 향을 가미한 푸른 식물 다바나가 향에 생동감을 선사하며 약간의 과일 노트를 더해줍니다.','note_davana.jpg','note_davana.jpg'),
(17,'잉글리쉬 허니서클','반짝이는 플로랄 향을 지닌 허니서클은 하트 노트를 꿀 향으로 물들여 풍부한 느낌을 선사합니다.','note_honeysuckle.jpg','note_honeysuckle.jpg'),
(18,'포머그래니트','과즙이 많은 붉은 과일의 조합으로 은은한 석류 향이 탑 노트에 감미롭고 상쾌한 느낌을 전해줍니다.','note_pomegranate.jpg','note_pomegranate.jpg'),
(19,'카사블랑카 백합','조화로운 플로랄 블렌드가 카사블랑카 백합의 강렬하고 스파이시한 느낌을 연상시킵니다','note_casablancalily.jpg','note_casablancalily.jpg'),
(20,'과이액목','매혹적이고 스모키한 나무 향이 스며들어 관능적인 분위기를 자아냅니다','note_ambrette.jpg','note_guaiacwood.jpg'),
(21,'암브레트 시드','정교한 아우라로 탑 노트를 감싸는 질감의 특징입니다.','note_ambrette.jpg','note_ambrette.jpg'),
(22,'씨 솔트','씨 솔트의 바삭바삭함이 질감과 산뜻함을 선사합니다.','note_seasalt.jpg','note_seasalt.jpg'),
(23,'세이지','흙 내음과 아로마틱함이 담긴 우디함이 베이스에 자연스러운 깊이를 줍니다.','note_sage.jpg','note_sage.jpg'),
(24,'빨간 사과','입 안 가득 침이 고이게 하는 신선한 사과 향을 그대로 담아내어 프레그런스의 탑노트를 순수하면서 프루티한 반전으로 열어주는 향','note_redapple.jpg','note_redapple.jpg'),
(25,'피오니','강렬한 플로랄 향에 섬세한 장미와 꿀향, 그리고 스치는 그리너리의 신선함. 프레그런스를 갓 피어나는 작약의 풍부함으로 채워주는 향','note_peony.jpg','note_peony.jpg'),
(26,'스웨이드','유연한 질감의 노트가 작약의 풍부한 꽃향을 받쳐주면서 매혹적이며 감각적인 느낌을 더해주는 향','note_suede.jpg','note_suede.jpg'),
(27,'아로마 클린 어코드','매우 신선한 노트가 처음 느껴보는 아로마틱한 변화를 더해줍니다.','note_aroma.jpg','note_aroma.jpg'),
(28,'히노키(편백나무)','희귀하고 귀한 우드가 아로마틱한 향과 강렬한 우디 향을 선사합니다.','note_hinoki.jpg','note_hinoki.jpg'),
(29,'시더우드 (삼나무)','드라이한 우디 향이 베이스에 카리스마 있는 강렬함을 부여합니다.','note_cedarwood.jpg','note_cedarwood.jpg');


DROP TABLE IF EXISTS `product_opt`;

CREATE TABLE `product_opt` (
  `product_opt_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_volume` varchar(50) NOT NULL,
  `product_upSystem` varchar(255) NOT NULL,
  `product_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_opt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `product_opt` VALUES
(1,1,110000,'30ml','mandarine_cologne_30ml.jpg','mandarine_cologne_30ml.jpg'),
(2,1,162000,'50ml','mandarine_cologne_50ml.jpg','mandarine_cologne_50ml.jpg'),
(3,1,235000,'100ml','mandarine_cologne_100ml.jpg','mandarine_cologne_100ml.jpg'),
(4,2,110000,'30ml','grapefruit_cologne_30ml.jpg','grapefruit_cologne_100ml.jpg'),
(5,2,235000,'100ml','grapefruit_cologne_100ml.jpg','Earl_cologne_100ml.jpg'),
(6,3,235000,'100ml','earl_cologne_100ml.jpg','earl_cologne_100ml.jpg'),
(11,17,235000,'100ml','woodsage_100ml1733387729353.jpg','woodsage_100ml.jpg'),
(14,21,112000,'200g','basilneroli_candle_200g1733459988486.jpg','basilneroli_candle_200g.jpg'),
(15,22,151000,'165ml','limebasil_diffusser_165ml1733460597286.jpg','limebasil_diffusser_165ml.jpg'),
(16,23,78000,'250ml','grapefurith_body_hand_wash_250ml1733464694758.jpg','grapefurith_body_hand_wash_250ml.jpg'),
(17,24,45000,'50ml','limebasil_bodycream_50ml_jpg1733467186735.avif','limebasil_bodycream_50ml_jpg.avif'),
(18,24,142000,'175ml','limebasil_bodycream_175ml1733467244539.jpg','limebasil_bodycream_175ml.jpg'),
(19,26,55000,'65g','englishpear_candle_65g1733885743103.jpg','englishpear_candle_65g.jpg'),
(20,26,313000,'600g','englishpear_candle_600g1733885796243.jpg','englishpear_candle_600g.jpg'),
(21,26,784000,'2.1kg','englishpear_candle_2.1kg1733886014452.jpg','englishpear_candle_2.1kg.jpg'),
(22,27,55000,'65g','wildbluebell_candle_65g1733886343305.jpg','wildbluebell_candle_65g.jpg'),
(23,27,112000,'200g','wildbluebell_candle_200g1733886359576.jpg','wildbluebell_candle_200g.jpg'),
(29,5,110000,'30ml','wildblue_cologne_30ml1734325647920.jpg','wildblue_cologne_30ml.jpg'),
(30,5,162000,'50ml','wildblue_cologne_50ml1734325666384.jpg','wildblue_cologne_50ml.jpg'),
(31,5,235000,'100ml','wildblue_cologne_100ml1734325867516.jpg','wildblue_cologne_100ml.jpg'),
(34,7,235000,'100ml','pomegranate_cologne_100ml1734326545279.jpg','pomegranate_cologne_100ml.jpg'),
(35,7,110000,'30ml','pomegranate_cologne_30ml1734326581167.jpg','pomegranate_cologne_30ml.jpg'),
(36,6,110000,'30ml','honeysuckle_cologne_30ml1734326915203.jpg','honeysuckle_cologne_30ml.jpg'),
(37,6,235000,'100ml','honeysuckle_cologne_100ml1734326953205.jpg','honeysuckle_cologne_100ml.jpg'),
(38,4,235000,'100ml','englishpear_cologne_100ml1734327083503.jpg','englishpear_cologne_100ml.jpg'),
(39,4,162000,'50ml','englishpear_cologne_50ml1734327131126.jpg','englishpear_cologne_50ml.jpg'),
(40,4,110000,'30ml','englishpear_cologne_30ml1734327155248.jpg','englishpear_cologne_30ml.jpg'),
(41,29,110000,'30ml','peony_cologne_30ml1734403316641.jpg','peony_cologne_30ml.jpg'),
(42,29,162000,'50ml','peony_cologne_50ml1734403332331.jpg','peony_cologne_50ml.jpg'),
(43,29,235000,'100ml','peony_cologne_100ml1734403345667.jpg','peony_cologne_100ml.jpg'),
(44,30,218000,'50ml','hinoki_cologne_50ml1734403797317.avif','hinoki_cologne_50ml.avif'),
(45,30,317000,'100ml','hinoki_cologne_100ml1734403811191.jpg','hinoki_cologne_100ml.jpg'),
(47,31,39000,'75ml','pear_showergel1734587266185.jpg','pear_showergel.jpg'),
(49,36,235000,'100ml','154_cologne1734934523149.jpg','154_cologne.jpg'),
(52,37,105000,'250ml','woodsage_lotion1735220261289.jpg','woodsage_lotion.jpg'),
(53,38,105000,'100ml','woodsage_mist1735220375202.jpg','woodsage_mist.jpg'),
(54,39,105000,'100ml','englishpear_mist1735220480716.jpg','englishpear_mist.jpg'),
(55,40,105000,'100ml','bluebell_mist1735220573212.jpg','bluebell_mist.jpg'),
(56,41,46000,'50ml','blackberry1735220719037.jpg','blackberry.jpg'),
(57,42,46000,'50ml','bluebel_handcreaml1735220909002.jpg','bluebel_handcreaml.jpg'),
(58,43,151000,'165ml','orange_diffuser1735221087261.jpg','orange_diffuser.jpg'),
(59,35,151000,'165ml','peony_diffuser1735221231822.jpg','peony_diffuser.jpg'),
(60,44,151000,'165ml','pomegranate1735221334568.jpg','pomegranate.jpg'),
(61,45,151000,'165ml','pear_diffuser1735221445630.jpg','pear_diffuser.jpg');
