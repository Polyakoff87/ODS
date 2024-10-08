import { createSlice } from "@reduxjs/toolkit";
import slider1 from "../pictures/newsSlider/19.01.2024.jpg";
import slider2 from "../pictures/newsSlider/24.01.2024.jpg";
import slider3 from "../pictures/newsSlider/03.02.2024.jpg";
import slider4 from "../pictures/newsSlider/16.02.2024.jpg";
import slider5 from "../pictures/newsSlider/29.02.2024.jpg";
import slider6 from "../pictures/newsSlider/02.03.2024.jpg";
import slider7 from "../pictures/newsSlider/02.03.2024.2.jpg";
import slider8 from "../pictures/newsSlider/05.03.2024.jpg";
import slider9 from "../pictures/newsSlider/25.03.2024.jpg";
import slider10 from "../pictures/newsSlider/30.03.2024.jpg";
import slider11 from "../pictures/newsSlider/13.04.2024.jpg";
import slider12 from "../pictures/newsSlider/14.04.2024.jpg";
import slider13 from "../pictures/newsSlider/15.04.2024.jpg";
import slider14 from "../pictures/newsSlider/17.04.2024.jpg";
import slider15 from "../pictures/newsSlider/17.04.2024.2.jpg";
import slider16 from "../pictures/newsSlider/18.04.2024.jpg";
import slider17 from "../pictures/newsSlider/22.04.2024.jpg";
import slider18 from "../pictures/newsSlider/28.04.2024.jpg";
import slider19 from "../pictures/newsSlider/10.05.2024.jpg";
import slider20 from "../pictures/newsSlider/10.05.2024.2.jpg";
import slider21 from "../pictures/newsSlider/28.05.2024.jpg";
import slider22 from "../pictures/newsSlider/30.05.2024.jpg";
import slider23 from "../pictures/newsSlider/14.06.2024.jpg";
import slider24 from "../pictures/newsSlider/15.06.2024.jpg";
import slider25 from "../pictures/newsSlider/23.06.2024.jpg";
import slider26 from "../pictures/newsSlider/28.06.2024.jpg";
import slider27 from "../pictures/newsSlider/30.06.2024.jpg";
import slider28 from "../pictures/newsSlider/08.07.2024.jpg";
import slider29 from "../pictures/newsSlider/19.07.2024.jpg";
import slider30 from "../pictures/newsSlider/02.08.2024.jpg";
import slider31 from "../pictures/newsSlider/29.08.2024.jpg";
import slider32 from "../pictures/newsSlider/03.09.2024.jpg";
import slider33 from "../pictures/newsSlider/12.09.2024.jpg";
import jan19_1 from "../pictures/news/19.01.2024/5lGbIqpk3Bk.jpg";
import jan19_2 from "../pictures/news/19.01.2024/7n_7U3zwoz8.jpg";
import jan19_3 from "../pictures/news/19.01.2024/ACfjfkjXwZg.jpg";
import jan19_4 from "../pictures/news/19.01.2024/AbZK8Mtzkao.jpg";
import jan19_5 from "../pictures/news/19.01.2024/CdSUxQ4Brzg.jpg";
import jan19_6 from "../pictures/news/19.01.2024/DyqwCKf2k8s.jpg";
import jan19_7 from "../pictures/news/19.01.2024/FlfahHp7MgQ.jpg";
import jan19_8 from "../pictures/news/19.01.2024/GWCAfT4-m8E.jpg";
import jan19_9 from "../pictures/news/19.01.2024/LhGETvVfrRQ.jpg";
import jan19_10 from "../pictures/news/19.01.2024/o35bKsKM7mY.jpg";
import jan24_1 from "../pictures/news/24.01.2024/2yvsTWO812Q.jpg";
import jan24_2 from "../pictures/news/24.01.2024/3wrrMy2jg08.jpg";
import jan24_3 from "../pictures/news/24.01.2024/BqqJB4Y45X4.jpg";
import jan24_4 from "../pictures/news/24.01.2024/EQcDCNTRNBE.jpg";
import jan24_5 from "../pictures/news/24.01.2024/KfUfBeIvDKQ.jpg";
import jan24_6 from "../pictures/news/24.01.2024/LGBYrMq4U8w.jpg";
import jan24_7 from "../pictures/news/24.01.2024/PznCUCPoeY0.jpg";
import jan24_8 from "../pictures/news/24.01.2024/UQwO9vzE4aI.jpg";
import jan24_9 from "../pictures/news/24.01.2024/WIZJVn_z7vA.jpg";
import jan24_10 from "../pictures/news/24.01.2024/Wv0NxunimJc.jpg";
import feb03_1 from "../pictures/news/03.02.2024/9shzOXnlBE4.jpg";
import feb03_2 from "../pictures/news/03.02.2024/JnGV0jKwo7U.jpg";
import feb03_3 from "../pictures/news/03.02.2024/SWmBFUKhudc.jpg";
import feb03_4 from "../pictures/news/03.02.2024/Uz2RhORRtlA.jpg";
import feb03_5 from "../pictures/news/03.02.2024/dD6-LHnqAk8.jpg";
import feb03_6 from "../pictures/news/03.02.2024/lTBsgqWR2tA.jpg";
import feb03_7 from "../pictures/news/03.02.2024/p15A-RakvHg.jpg";
import feb03_8 from "../pictures/news/03.02.2024/qHy219T9G9c.jpg";
import feb03_9 from "../pictures/news/03.02.2024/tv_fYzVxET4.jpg";
import feb16_1 from "../pictures/news/16.02.2024/--BlM-V1Rxc.jpg";
import feb16_2 from "../pictures/news/16.02.2024/9M8pTeHqKl0.jpg";
import feb16_3 from "../pictures/news/16.02.2024/K6ifghMmK3w.jpg";
import feb16_4 from "../pictures/news/16.02.2024/Lul482Sl7e8.jpg";
import feb16_5 from "../pictures/news/16.02.2024/TjpgBEMRlL0.jpg";
import feb16_6 from "../pictures/news/16.02.2024/UGeNh5c7NDY.jpg";
import feb16_7 from "../pictures/news/16.02.2024/_wXsNQ3rIc4.jpg";
import feb16_8 from "../pictures/news/16.02.2024/f9Dkc2HylSs.jpg";
import feb16_9 from "../pictures/news/16.02.2024/v2RwDQU9zLE.jpg";
import feb29_1 from "../pictures/news/29.02.2024/K7QrekaVLYs.jpg";
import feb29_2 from "../pictures/news/29.02.2024/Lf-220fSSr0.jpg";
import feb29_3 from "../pictures/news/29.02.2024/Nn5fWc1cL9k.jpg";
import feb29_4 from "../pictures/news/29.02.2024/YOoqGyrRpEs.jpg";
import feb29_5 from "../pictures/news/29.02.2024/brKzTeQ63hA.jpg";
import feb29_6 from "../pictures/news/29.02.2024/hIFoitKSaO8.jpg";
import feb29_7 from "../pictures/news/29.02.2024/rtUtjJRi4RY.jpg";
import feb29_8 from "../pictures/news/29.02.2024/z_s85udxTME.jpg";
import feb29_9 from "../pictures/news/29.02.2024/UuthYrzzDHc.jpg";
import mar02_1 from "../pictures/news/02.03.2024/6z5gRzqduu8.jpg";
import mar02_2 from "../pictures/news/02.03.2024/Dll4BO9dvSg.jpg";
import mar02_3 from "../pictures/news/02.03.2024/FJGGoGVlDkA.jpg";
import mar02_4 from "../pictures/news/02.03.2024/Ppbk1fZDOx8.jpg";
import mar02_5 from "../pictures/news/02.03.2024/RfPwlk_yTNk.jpg";
import mar02_6 from "../pictures/news/02.03.2024/a904rmiRW0c.jpg";
import mar02_7 from "../pictures/news/02.03.2024/lpWuCxOQpVA.jpg";
import mar02_8 from "../pictures/news/02.03.2024/oFhpj5Efmqs.jpg";
import mar02_9 from "../pictures/news/02.03.2024/v-5UiwzeqPA.jpg";
import mar022_1 from "../pictures/news/02.03.2024.2/-N7m3cj0YaQ.jpg";
import mar022_2 from "../pictures/news/02.03.2024.2/1LwnUTlDKTc.jpg";
import mar022_3 from "../pictures/news/02.03.2024.2/5pf-gN6uJww.jpg";
import mar022_4 from "../pictures/news/02.03.2024.2/E3V4VrKjlHE.jpg";
import mar022_5 from "../pictures/news/02.03.2024.2/W2dbLrZKUmA.jpg";
import mar022_6 from "../pictures/news/02.03.2024.2/_mPT88yBY5g.jpg";
import mar022_7 from "../pictures/news/02.03.2024.2/kGj8SB1Uv9A.jpg";
import mar022_8 from "../pictures/news/02.03.2024.2/n7CmmTQXzfU.jpg";
import mar022_9 from "../pictures/news/02.03.2024.2/xZRJ9Yt2qIs.jpg";
import mar05_1 from "../pictures/news/05.03.2024/-v86Znjen5E.jpg";
import mar05_2 from "../pictures/news/05.03.2024/5YL1-7SkwEY.jpg";
import mar05_3 from "../pictures/news/05.03.2024/E5AowdjQgwU.jpg";
import mar05_4 from "../pictures/news/05.03.2024/FkRskuDxLEc.jpg";
import mar05_5 from "../pictures/news/05.03.2024/UPhW9EpRW4U.jpg";
import mar05_6 from "../pictures/news/05.03.2024/n3HdimFWtwQ.jpg";
import mar25_1 from "../pictures/news/25.03.2024/0tqbA1VIzZc.jpg";
import mar25_2 from "../pictures/news/25.03.2024/25.03.2024.jpg";
import mar25_3 from "../pictures/news/25.03.2024/6xki8r6UkPQ.jpg";
import mar25_4 from "../pictures/news/25.03.2024/Jahjv8c8zLU.jpg";
import mar25_5 from "../pictures/news/25.03.2024/LvtJPu5aE7M.jpg";
import mar25_6 from "../pictures/news/25.03.2024/MkFmbYWEBPM.jpg";
import mar25_7 from "../pictures/news/25.03.2024/V9B4h43fUFQ.jpg";
import mar25_8 from "../pictures/news/25.03.2024/Z9jZK1pGm0s.jpg";
import mar25_9 from "../pictures/news/25.03.2024/pd8n9J2XJrM.jpg";
import mar30_1 from "../pictures/news/30.03.2024/2DN3s4SwKOY.jpg";
import mar30_2 from "../pictures/news/30.03.2024/FGDcv63kHNg.jpg";
import mar30_3 from "../pictures/news/30.03.2024/RzpI_t8ENVE.jpg";
import mar30_4 from "../pictures/news/30.03.2024/_5a7ESHuHPc.jpg";
import mar30_5 from "../pictures/news/30.03.2024/_TlJSWAcrpw.jpg";
import mar30_6 from "../pictures/news/30.03.2024/hMiAG2ID3nc.jpg";
import mar30_7 from "../pictures/news/30.03.2024/ps_ThBwf-nM.jpg";
import mar30_8 from "../pictures/news/30.03.2024/uwMVxE6tgSw.jpg";
import mar30_9 from "../pictures/news/30.03.2024/zdXdCj3x9v8.jpg";
import apr13_1 from "../pictures/news/13.04.2024/20240407_143738.jpg";
import apr13_2 from "../pictures/news/13.04.2024/20240407_143756.jpg";
import apr13_3 from "../pictures/news/13.04.2024/20240407_144042.jpg";
import apr13_4 from "../pictures/news/13.04.2024/20240407_144606.jpg";
import apr13_5 from "../pictures/news/13.04.2024/20240407_145122.jpg";
import apr13_6 from "../pictures/news/13.04.2024/20240407_145139.jpg";
import apr13_7 from "../pictures/news/13.04.2024/20240407_151451.jpg";
import apr13_8 from "../pictures/news/13.04.2024/20240407_151804.jpg";
import apr13_9 from "../pictures/news/13.04.2024/IMG-20240408-WA0087.jpg";
import apr14_1 from "../pictures/news/14.04.2024/20240408_102036.jpg";
import apr14_2 from "../pictures/news/14.04.2024/20240408_103123.jpg";
import apr14_3 from "../pictures/news/14.04.2024/20240408_105623.jpg";
import apr14_4 from "../pictures/news/14.04.2024/20240408_112449.jpg";
import apr14_5 from "../pictures/news/14.04.2024/20240408_140055.jpg";
import apr14_6 from "../pictures/news/14.04.2024/20240408_141113.jpg";
import apr14_7 from "../pictures/news/14.04.2024/20240408_141702.jpg";
import apr14_8 from "../pictures/news/14.04.2024/IMG-20240408-WA0093.jpg";
import apr14_9 from "../pictures/news/14.04.2024/IMG-20240408-WA0098.jpg";
import apr15_1 from "../pictures/news/15.04.2024/20240409_114935.jpg";
import apr15_2 from "../pictures/news/15.04.2024/20240409_115216.jpg";
import apr15_3 from "../pictures/news/15.04.2024/20240409_120152.jpg";
import apr15_4 from "../pictures/news/15.04.2024/20240409_121246.jpg";
import apr15_5 from "../pictures/news/15.04.2024/20240409_122552.jpg";
import apr15_6 from "../pictures/news/15.04.2024/20240409_123026.jpg";
import apr15_7 from "../pictures/news/15.04.2024/IMG-20240409-WA0053.jpg";
import apr15_8 from "../pictures/news/15.04.2024/IMG-20240409-WA0143.jpg";
import apr15_9 from "../pictures/news/15.04.2024/IMG-20240410-WA0013.jpg";
import apr17_1 from "../pictures/news/17.04.2024/VZXUYjHdywU.jpg";
import apr17_2 from "../pictures/news/17.04.2024/W0lnBmGSoRw.jpg";
import apr17_3 from "../pictures/news/17.04.2024/_SY-5b9NxXc.jpg";
import apr17_4 from "../pictures/news/17.04.2024/dCOGuPJPMYI.jpg";
import apr17_5 from "../pictures/news/17.04.2024/dvUbEQlzmFE.jpg";
import apr17_6 from "../pictures/news/17.04.2024/dyNDU8vA1Hk.jpg";
import apr17_7 from "../pictures/news/17.04.2024/ojkHJs4yZK8.jpg";
import apr17_8 from "../pictures/news/17.04.2024/osDyfShfTVk.jpg";
import apr17_9 from "../pictures/news/17.04.2024/tR-r-DmOkJA.jpg";
import apr172_1 from "../pictures/news/17.04.2024.2/ODaFMK56m84.jpg";
import apr172_2 from "../pictures/news/17.04.2024.2/Syg1Qb89Yi4.jpg";
import apr172_3 from "../pictures/news/17.04.2024.2/WdMRnnuIjgQ.jpg";
import apr172_4 from "../pictures/news/17.04.2024.2/Y_2nVfyT-jo.jpg";
import apr172_5 from "../pictures/news/17.04.2024.2/_jSdeZvbZYs.jpg";
import apr172_6 from "../pictures/news/17.04.2024.2/fngraZjFDyk.jpg";
import apr172_7 from "../pictures/news/17.04.2024.2/pSIdAwsmhn4.jpg";
import apr172_8 from "../pictures/news/17.04.2024.2/uGgu3Jvfw-w.jpg";
import apr172_9 from "../pictures/news/17.04.2024.2/zRfonAr83Xk.jpg";
import apr18_1 from "../pictures/news/18.04.2024/3z5rojLRRIY.jpg";
import apr18_2 from "../pictures/news/18.04.2024/97-kIWdlFno.jpg";
import apr18_3 from "../pictures/news/18.04.2024/AsBAiFYRkbs.jpg";
import apr18_4 from "../pictures/news/18.04.2024/BI4uhY9kAUg.jpg";
import apr18_5 from "../pictures/news/18.04.2024/CJFssEh1jz0.jpg";
import apr18_6 from "../pictures/news/18.04.2024/H0L5PJcdtKY.jpg";
import apr18_7 from "../pictures/news/18.04.2024/aKVd7wH8mrY.jpg";
import apr18_8 from "../pictures/news/18.04.2024/gf9B9J41DUk.jpg";
import apr18_9 from "../pictures/news/18.04.2024/xVUDkQ9joIQ.jpg";
import apr22_1 from "../pictures/news/22.04.2024/8UCuJ5ODXCE.jpg";
import apr22_2 from "../pictures/news/22.04.2024/FHvnUcjFhAs.jpg";
import apr22_3 from "../pictures/news/22.04.2024/FN26xGywOkU.jpg";
import apr22_4 from "../pictures/news/22.04.2024/MoC4icvuQR0.jpg";
import apr22_5 from "../pictures/news/22.04.2024/S9hQTNejI98.jpg";
import apr22_6 from "../pictures/news/22.04.2024/YIrpG8VViMs.jpg";
import apr22_7 from "../pictures/news/22.04.2024/mCACt9GE0Ws.jpg";
import apr22_8 from "../pictures/news/22.04.2024/t3_8JWKgabA.jpg";
import apr22_9 from "../pictures/news/22.04.2024/udAx2sntHzw.jpg";
import apr28_1 from "../pictures/news/28.04.2024/3L-T8bpdlVQ.jpg";
import apr28_2 from "../pictures/news/28.04.2024/JXfg8PXjeWk.jpg";
import apr28_3 from "../pictures/news/28.04.2024/WS1hFzg8PHM.jpg";
import apr28_4 from "../pictures/news/28.04.2024/__2C-rehS4I.jpg";
import apr28_5 from "../pictures/news/28.04.2024/_rrwJidn2Y4.jpg";
import apr28_6 from "../pictures/news/28.04.2024/q-6wZ5-ArFM.jpg";
import apr28_7 from "../pictures/news/28.04.2024/r9KA63iHKU8.jpg";
import apr28_8 from "../pictures/news/28.04.2024/s8sMrpQi-kE.jpg";
import apr28_9 from "../pictures/news/28.04.2024/xLIIUiyg618.jpg";
import may10_1 from "../pictures/news/10.05.2024/126myCbUqxY.jpg";
import may10_2 from "../pictures/news/10.05.2024/LnD_1LyJR_Q.jpg";
import may10_3 from "../pictures/news/10.05.2024/TuQX2K6eIBQ.jpg";
import may10_4 from "../pictures/news/10.05.2024/V2EjcCaAQ-g.jpg";
import may10_5 from "../pictures/news/10.05.2024/bfXiy-EXi-8.jpg";
import may10_6 from "../pictures/news/10.05.2024/sDka_a2MtxM.jpg";
import may10_7 from "../pictures/news/10.05.2024/wILMkXfKbQ8.jpg";
import may102_1 from "../pictures/news/10.05.2024.2/2dyhvQA5fOs.jpg";
import may102_2 from "../pictures/news/10.05.2024.2/84uIhsJ4Uno.jpg";
import may102_3 from "../pictures/news/10.05.2024.2/CpyBX2Er4pg.jpg";
import may102_4 from "../pictures/news/10.05.2024.2/JQuq4hAdiXo.jpg";
import may102_5 from "../pictures/news/10.05.2024.2/VwivC1cy5pc.jpg";
import may102_6 from "../pictures/news/10.05.2024.2/_I3vvW12T6Q.jpg";
import may102_7 from "../pictures/news/10.05.2024.2/iAHo52IzXAo.jpg";
import may102_8 from "../pictures/news/10.05.2024.2/j8yop4Lu6hA.jpg";
import may102_9 from "../pictures/news/10.05.2024.2/yMA8oHtHvR0.jpg";
import may102_10 from "../pictures/news/10.05.2024.2/zA7RnzuFa5k.jpg";
import may28_1 from "../pictures/news/28.05.2024/09D867A70Zk.jpg";
import may28_2 from "../pictures/news/28.05.2024/3HNmlCEJYEA.jpg";
import may28_3 from "../pictures/news/28.05.2024/3QuU5D5ntzk.jpg";
import may28_4 from "../pictures/news/28.05.2024/4UALgA7Mqaw.jpg";
import may28_5 from "../pictures/news/28.05.2024/BXqPiuPTqfc.jpg";
import may28_6 from "../pictures/news/28.05.2024/NNK_gPpnIm0.jpg";
import may28_7 from "../pictures/news/28.05.2024/QpO8YgyBwMc.jpg";
import may28_8 from "../pictures/news/28.05.2024/SaoVmUNxUX8.jpg";
import may28_9 from "../pictures/news/28.05.2024/WJo0Osm04cU.jpg";
import may28_10 from "../pictures/news/28.05.2024/YFeAXMUVHQw.jpg";
import may30_1 from "../pictures/news/30.05.2024/2ak52UarF8E.jpg";
import may30_2 from "../pictures/news/30.05.2024/4FHqYX3UcAM.jpg";
import may30_3 from "../pictures/news/30.05.2024/4Rl947grVzo.jpg";
import may30_4 from "../pictures/news/30.05.2024/4nVoEhc4WEo.jpg";
import may30_5 from "../pictures/news/30.05.2024/8HMdUZExbBo.jpg";
import may30_6 from "../pictures/news/30.05.2024/p207c77RF_U.jpg";
import may30_7 from "../pictures/news/30.05.2024/sSVg8-f80n4.jpg";
import may30_8 from "../pictures/news/30.05.2024/sXXcGDacOy8.jpg";
import may30_9 from "../pictures/news/30.05.2024/zeoaDZSb4BY.jpg";
import jun14_1 from "../pictures/news/14.06.2024/0Im01HJslw4.jpg";
import jun14_2 from "../pictures/news/14.06.2024/5UhjOLRW0Y4.jpg";
import jun14_3 from "../pictures/news/14.06.2024/DphwR1AxQds.jpg";
import jun14_4 from "../pictures/news/14.06.2024/Ik8rhxePxEk.jpg";
import jun14_5 from "../pictures/news/14.06.2024/LTpcktJ7wMk.jpg";
import jun14_6 from "../pictures/news/14.06.2024/UHOfSyLsuSc.jpg";
import jun14_7 from "../pictures/news/14.06.2024/YWub2iE0P-g.jpg";
import jun14_8 from "../pictures/news/14.06.2024/kqSyxp806a0.jpg";
import jun14_9 from "../pictures/news/14.06.2024/lYOr43ZwlDE.jpg";
import jun14_10 from "../pictures/news/14.06.2024/rfkVngTgSbk.jpg";
import jun15_1 from "../pictures/news/15.06.2024/2hpNA4L29jg.jpg";
import jun15_2 from "../pictures/news/15.06.2024/6toDjxODR0k.jpg";
import jun15_3 from "../pictures/news/15.06.2024/IcSZu-gKAuE.jpg";
import jun15_4 from "../pictures/news/15.06.2024/MlRk_-p1oGI.jpg";
import jun15_5 from "../pictures/news/15.06.2024/PI_leE48FDc.jpg";
import jun15_6 from "../pictures/news/15.06.2024/SPPRFDuenRQ.jpg";
import jun15_7 from "../pictures/news/15.06.2024/ZILm-jer3X0.jpg";
import jun15_8 from "../pictures/news/15.06.2024/_h2wewVf8ho.jpg";
import jun15_9 from "../pictures/news/15.06.2024/b2SqS__T3Zw.jpg";
import jun15_10 from "../pictures/news/15.06.2024/hNe-fDkI190.jpg";
import jun23_1 from "../pictures/news/23.06.2024/8V8gnQURjH0.jpg";
import jun23_2 from "../pictures/news/23.06.2024/U1OzTWVw4Pc.jpg";
import jun23_3 from "../pictures/news/23.06.2024/WC_NS3Kaf64.jpg";
import jun23_4 from "../pictures/news/23.06.2024/kWCLuBj50SI.jpg";
import jun23_5 from "../pictures/news/23.06.2024/lcs7Axv04iA.jpg";
import jun23_6 from "../pictures/news/23.06.2024/tAVhwBOp1ZQ.jpg";
import jun23_7 from "../pictures/news/23.06.2024/tw1soo4Ml10.jpg";
import jun23_8 from "../pictures/news/23.06.2024/vpufM1P7MdA.jpg";
import jun23_9 from "../pictures/news/23.06.2024/zTHX9O8Zyp4.jpg";
import jun28_1 from "../pictures/news/28.06.2024/08e1uZhPysE.jpg";
import jun28_2 from "../pictures/news/28.06.2024/Dn3U1hiX1s0.jpg";
import jun28_3 from "../pictures/news/28.06.2024/F4umhTIKslo.jpg";
import jun28_4 from "../pictures/news/28.06.2024/HelM3jVxGwk.jpg";
import jun28_5 from "../pictures/news/28.06.2024/IJOvpOmmfbw.jpg";
import jun28_6 from "../pictures/news/28.06.2024/P7E2YdR3x00.jpg";
import jun28_7 from "../pictures/news/28.06.2024/QxTgCQyDOvs.jpg";
import jun28_8 from "../pictures/news/28.06.2024/_l6c6HZyIks.jpg";
import jun28_9 from "../pictures/news/28.06.2024/og8A5sYOeWI.jpg";
import jun28_10 from "../pictures/news/28.06.2024/tOy-54fz1B8.jpg";
import jun30_1 from "../pictures/news/30.06.2024/8ktigcNbD3M.jpg";
import jun30_2 from "../pictures/news/30.06.2024/DwGYYNfrXzo.jpg";
import jun30_3 from "../pictures/news/30.06.2024/I-n1kqSE17U.jpg";
import jun30_4 from "../pictures/news/30.06.2024/NkngYRxOFjw.jpg";
import jun30_5 from "../pictures/news/30.06.2024/XLg3LS7ks90.jpg";
import jun30_6 from "../pictures/news/30.06.2024/ne_jQ6cCB_c.jpg";
import jun30_7 from "../pictures/news/30.06.2024/sltZWPD1d7g.jpg";
import jun30_8 from "../pictures/news/30.06.2024/tTRG0J5C0KY.jpg";
import jun30_9 from "../pictures/news/30.06.2024/uKdD8p-pmEw.jpg";
import jun30_10 from "../pictures/news/30.06.2024/vqxtVU7kNyw.jpg";
import jul08_1 from "../pictures/news/08.07.2024/9VOyaz7t0nA.jpg";
import jul08_2 from "../pictures/news/08.07.2024/GszdLQLgeGk.jpg";
import jul08_3 from "../pictures/news/08.07.2024/WEIjrtBeFgs.jpg";
import jul08_4 from "../pictures/news/08.07.2024/Z2OCmgTMH_E.jpg";
import jul08_5 from "../pictures/news/08.07.2024/f7PtVtbY9Z0.jpg";
import jul08_6 from "../pictures/news/08.07.2024/sTAvEaSQc9c.jpg";
import jul08_7 from "../pictures/news/08.07.2024/u_5jyGe35IA.jpg";
import jul19_1 from "../pictures/news/19.07.2024/1zW_vrlgv7w.jpg";
import jul19_2 from "../pictures/news/19.07.2024/2Meqt13GDvY.jpg";
import jul19_3 from "../pictures/news/19.07.2024/MkVLiHFoZBk.jpg";
import jul19_4 from "../pictures/news/19.07.2024/S9MFqEydrHE.jpg";
import jul19_5 from "../pictures/news/19.07.2024/TtTRIP_dDqg.jpg";
import jul19_6 from "../pictures/news/19.07.2024/dLIwKvBNdVk.jpg";
import jul19_7 from "../pictures/news/19.07.2024/ht4uLnllAH4.jpg";
import jul19_8 from "../pictures/news/19.07.2024/jy58_e5zzhM.jpg";
import jul19_9 from "../pictures/news/19.07.2024/qcWU9jdSurE.jpg";
import jul19_10 from "../pictures/news/19.07.2024/wAl9YHSq5Ps.jpg";
import aug02_1 from "../pictures/news/02.08.2024/-2r4ixUo4_E.jpg";
import aug02_2 from "../pictures/news/02.08.2024/FjtwrIGCCxw.jpg";
import aug02_3 from "../pictures/news/02.08.2024/IFJm7VMGUYs.jpg";
import aug02_4 from "../pictures/news/02.08.2024/OMD_-9OWnO0.jpg";
import aug02_5 from "../pictures/news/02.08.2024/W2KXEwOckZY.jpg";
import aug02_6 from "../pictures/news/02.08.2024/XCFPBBeqI4Q.jpg";
import aug02_7 from "../pictures/news/02.08.2024/j7_8E2FuyBw.jpg";
import aug02_8 from "../pictures/news/02.08.2024/qJkzG83g2HI.jpg";
import aug29_1 from "../pictures/news/29.08.2024/-dmhMmFVe5k.jpg";
import aug29_2 from "../pictures/news/29.08.2024/EaBEVJZZZ14.jpg";
import aug29_3 from "../pictures/news/29.08.2024/LMM9EnUU8nw.jpg";
import aug29_4 from "../pictures/news/29.08.2024/SK5kQdiHTfw.jpg";
import aug29_5 from "../pictures/news/29.08.2024/ZtW_q2-s-Yw.jpg";
import aug29_6 from "../pictures/news/29.08.2024/c4XCtsATxKY.jpg";
import aug29_7 from "../pictures/news/29.08.2024/f9ayLyc53wQ.jpg";
import aug29_8 from "../pictures/news/29.08.2024/memI3-GkQBc.jpg";
import aug29_9 from "../pictures/news/29.08.2024/pUVeN2bpZG4.jpg";
import aug29_10 from "../pictures/news/29.08.2024/y3XZJTn4mxw.jpg";
import sen03_1 from "../pictures/news/03.09.2024/6TzmyzulWWY.jpg";
import sen03_2 from "../pictures/news/03.09.2024/DjTdO6PpzTI.jpg";
import sen03_3 from "../pictures/news/03.09.2024/KRVYEXuUN4U.jpg";
import sen03_4 from "../pictures/news/03.09.2024/mlTUMaNkMXI.jpg";
import sen03_5 from "../pictures/news/03.09.2024/pbbcQnKT50w.jpg";
import sen12_1 from "../pictures/news/12.09.2024/-oo6bgoG8WQ.jpg";
import sen12_2 from "../pictures/news/12.09.2024/F0Xw78_pcZY.jpg";
import sen12_3 from "../pictures/news/12.09.2024/KgTxBFCTsrI.jpg";
import sen12_4 from "../pictures/news/12.09.2024/XjRhDezY1vE.jpg";
import sen12_5 from "../pictures/news/12.09.2024/Zd4E6NYaCEU.jpg";
import sen12_6 from "../pictures/news/12.09.2024/t0guApLjJD4.jpg";
import sen12_7 from "../pictures/news/12.09.2024/vLIeRw3mA0U.jpg";
import sen12_8 from "../pictures/news/12.09.2024/xPTC4ua-z6k.jpg";
import sen12_9 from "../pictures/news/12.09.2024/ye4o8Oh8mB4.jpg";

export const newsSliderSlice = createSlice({
  name: "newsSlider",
  initialState: [
    {
      id: 0,
      url: slider1,
      date: "19.01.2024",
      text: `19 января 2024г. участники организации "Общество доступная среда" в количестве 9 чел. с 2-мя сопровождающими совершили поездку в село Семилужки Томского р-на с целью посещения храма во имя Св.Николая Угодника и музея "Дорожный павильон Цесаревича Николая".
        Сначала участники по прибытию в село Семилужки посетили храм, в котором все желющие набрали Крещенской воды и настоятель церкви о.Евгений провел беседу с учпстниками поездки  по интересущим их вопросам.
        Участники экскурсии после храма отпраились в Казачий Острог (своеобразный музей под открытым небом), где приняли участие в праздновании "Крещения Господня". Руководитель музея Владимир Ильин провел небольшую, но очень содержательную экскурсию в которой познакомил с историей Качачьего Семилужского Острога с его назначением и ролью в охране г.Томска от набегов средне-азиатских племён и показал воинское казачье снаряжение и предметы быта домашнего обихода Томских казаков.
        После Казачьего Острога участники поездки посетили музей "Дорожный павильон Цесаревича Николая". Экскурсию провела руководитель музея Галина Егоровна Горбунова.
        Экскурсанты внимательно прослушали историю появления в музее древа династии Романовых, историю путешествия  Цесаревича Николая по Российской Империи от г.Владивостока до г.Санкт-Петербурга, об остановке  Цесаревича в г.Томске летом в 1891г. 
        Галина Егоровна показала выставку Обрядовых изделий  посвященную Рождеству, Крещению Господня и русским традициям.
        Все участники поездки выразили благодарность руководителю музея Казачьего Острога, настоятелю храма,  руководителю Дорожного павильона Цесаревича Николая за полученные знания, за внимательное, доброжелательное отношение к "особой" категории экскурсантам.
        Участники поездки выразили организаторам поездки в с.Семилужки  благодарность и предложили почаще организовывать такие экскурсии.
        Председатель ТРОО "Общество доступная среда".`,
      img: [
        jan19_1,
        jan19_2,
        jan19_3,
        jan19_4,
        jan19_5,
        jan19_6,
        jan19_7,
        jan19_8,
        jan19_9,
        jan19_10,
      ],
    },
    {
      id: 1,
      url: slider2,
      date: "24.01.2024",
      text: `По приглашению фонда "Соработничество" председатель ТРОО "Общество доступная среда" Игнатова Ю.А. и руководитель проекта "Помним, познаем,храним и передаем другим"в рамках конкурса "Бережливое сознание" Михайлова В.И. посетили ежегодные XXXll Международные Рождественские образовательные чтения в г. Москва с 24 по 26 января 2024г.
        24 января в Кремлёвском Дворце съездов состоялось открытие Рождественных чтений, которые были открыты приветственным выступлением Патриархом Московским и всея Руси Кириллом. Участников Чтений приветствовали также представители Правительства РФ, Гос.Думы и Федерального Собрания.
        После торжественной части состоялся концерт посвященный прославлению России.
        25 января приняли участие в работе секций Рождественных чтений по выбранной теме напоавлений в Зале Церковных соборов храма Христа Спасителя и ознакомились с выставкой-ярмаркой православной продукции.
        26 января по программе фонда "Соработничество" в конференц-зале Зала церковнях соборов храма Христа Спасителя приняли участие в Дискуссии "От устоев и  развития к устойчивому будущему" и Круглом столе "Год семьи. Православные инициативы в проектах". В результате этого заседания познакомились с общим направлением работы по сохранению и передачи современному поколению русских православных традиций, особенно через воспитание детей и молодежи в семье. Участниками Круглого стола из разных регионов страны были представлены интересные проекты по работе с семьями и молодежью.
        Михайлова В.И. и Игнатова Ю.А. после посещения Рождественских чтений  выразили свое мнение,что это мероприятие было: грандиозным, великолепным и очень полезным!`,
      img: [
        jan24_1,
        jan24_2,
        jan24_3,
        jan24_4,
        jan24_5,
        jan24_6,
        jan24_7,
        jan24_8,
        jan24_9,
        jan24_10,
      ],
    },
    {
      id: 2,
      url: slider3,
      date: "03.02.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 03 февраля 2024г. в Томском Областном Краеведческом музее состоялась экскурсия «Томск и Томичи в годы Великой Отечественной войны 1941-1945г.г.».
        Экскурсовод музея Мария Никольская провела очень интересную и познавательную экскурсию, её участники инвалиды по зрению познакомились с состоянием промышленности и численностью населения г.Томска накануне ВОВ, узнали сколько промышленных предприятий и советских граждан было эвакуировано в Томск в течение 1941-42г.г. Экскурсовод подробно остановилась на выпускаемой для фронта продукции, на работе госпиталей, учёных г.Томска, самоотверженном труде Томичей во имя Победы над врагом. Экскурсанты познакомились с подвигом томских дивизий и Томичей на фронтах Великой Отечественной войны, героизм которых увековечен в названиях томских улиц. Экскурсия произвела на её участников глубокое впечатление. Благодарность за неё они выразили в Книге отзывов.`,
      img: [
        feb03_1,
        feb03_2,
        feb03_3,
        feb03_4,
        feb03_5,
        feb03_6,
        feb03_7,
        feb03_8,
        feb03_9,
      ],
    },
    {
      id: 3,
      url: slider4,
      date: "16.02.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 16 и 17 февраля 2024г. состоялась поездка в с.Кривошеино и г.Колпашево участников литературного мини-театра.
      Участники мини-театра показали мини-спектакль посвященный 100летию со дня рождения поэту и прозаику Э.А.Асадову, которое отмечалось 07 сентября 2023г. по его произведениям и спектакль по рассказу А.П.Чехова "Радость" зрителям МО ВОС с.Кривошеино 16 февраля и зрителям МО ВОС г.Колпашево 17 февраля.
      Спектакль по рассказу А.П.Чехова, посвящается 420летию г.Томска и 220летию образованию Томской губернии в память о пребывании в г.Томске великого русского писателя во время пути на о.Сахалин. Самодеятельные артисты старались донести до зрителей преклонение перед боевым, гражданским и духовным подвигом Э.Асадова, значение его творчества для советских людей второй половины 20-го столетия и будущего поколения, которое является весомым вкладом в литературное наследие нашей страны. А в спектакле по рассказу А.П.Чехова артисты сумели передать иронию и юмор содержания рассказа, главный герой которого исполнился небывалой радостью, что о нем, попавшего в нетрезвом состоянии под сани извозчика, сообщили в газете.
      Зрители МО ВОС с.Кривошеино и МО ВОС г.Колпашево тепло встретили представление мини-театра и выразили надежду, что такая встреча будет не последней.
      Руководитель проекта В.И.Михайлова передала в дар МО ВОС с.Кривошеино изображения икон Богоматери, Святителя Николая Чудотворца, Святой Троицы и иконы Святых, выполненных в технике рельефной графики на пластиковой основе специально для слепых и слабовидящих. Эти изображения были приобретены организацией на средства православного гранта 2022г. Свою благодарность участникам мини-театра зрители с.Кривошеино выразили в лице председателя Совета ветеранов Кривошеинского р-на Смысловой С.В. в благодарственном письме.`,
      img: [
        feb16_1,
        feb16_2,
        feb16_3,
        feb16_4,
        feb16_5,
        feb16_6,
        feb16_7,
        feb16_8,
        feb16_9,
      ],
    },
    {
      id: 4,
      url: slider5,
      date: "29.02.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 29 февраля 2024г. состоялась экскурсия «Герой Советского Союза И.С.Черных – «Огненный лётчик».
      Экскурсию провела руководитель проекта В.И.Михайлова, в ней приняли участие 12 инвалидов по зрению, Экскурсия началась от Томского Индустриального техникума, расположенного по ул. Беленца, д.11. В 30-е г.г. 20 века техникум являлся ФЗУ завода «Металлист» (Фабрично заводское училище, ныне Томского электромеханического завода).
      Над входом техникума установлена мемориальная доска, сообщающая, что с февраля 1935г. по апрель 1936г. в этом учебном заведении (ФЗУ завода «Металлист») учился Герой Советского Союза Иван Сергеевич Черных. Экскурсовод рассказала, как он поступил в училище, какую получилось в нём специальность, куда был направлен на работу после окончания учёбы в училище, и обратил внимание на корпус внутри двора, где располагались мастерские училища. Затем участники экскурсии проехали по пр. Ленина, мимо главного корпуса ФЗУ, ныне учебной базы факультета журналистика ТГУ (пр.Ленина, д.66). Далее автобус проследовал до ул. Петропавловская по маршруту, по которому, учащийся И.С.Черных ходил от своего дома до ФЗУ. После экскурсанты остановились у старого здания школы №4, в котором И.С.Черных окончил 6 классов. Экскурсия завершилась у памятника Героя на площади возле Дворца культуры Авангард. В экскурсии Михайлова В.И. использовала материал о жизни и подвиге Героя, собранный в Центральном архиве Министерства Обороны, из воспоминаний его матери, с которой встречалась в свои школьные годы, и содержание экскурсии получилось, интересным, увлекательным и эмоциональным. Это отметили в своих отзывах участники экскурсии. Для них многие факты, изложенные в экскурсии, оказались совершенно новыми, услышанными впервые.
      В Томске мы ходим по улицам названия, которых посвящены Героям страны, выдающимся людям страны и города, но фактически мало знаем об их жизни, деятельности, подвигах. Поэтому такие экскурсии. Как о Герое-летчике И.С.Черных, вошедшем в истории Великой Отечественной войны под названием «Огненный лётчик», несомненно, полезны и необходимы.`,
      img: [
        feb29_1,
        feb29_2,
        feb29_3,
        feb29_4,
        feb29_5,
        feb29_6,
        feb29_7,
        feb29_8,
        feb29_9,
      ],
    },
    {
      id: 5,
      url: slider6,
      date: "02.03.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 02 марта 2024г. в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им. А.С.Пушкина состоялось открытие выставки «Семейные реликвии» и экскурсия для участников проекта и членов организации и читателей библиотеки.
      На выставку были  предоставлены экспонаты членов ТРОО «Общество доступная среда»: Андреевой А.Я.,  Михайловой В.И., Былиной О.А., Ивановой Е.М., Лубениковой И.В., Костиковой Е.И., Головиной Г.П., Игольниковыми Е.И. и В.В., Тогушаковой Л.А.
      Представленные экспонаты участников выставки  коротко рассказывали о трудовых, боевых заслугах, творческих способностях их обладателей и преемственности сохранения семейных ценностей в семье в настоящее время.
      На выставке присутствовало 30 чел., они   внимательно прослушали  пояснение к выставке, описание каждого экспоната и кто его представил и кому он принадлежал.
      Присутствующие члены Организации после экскурсии  высказали своё мнение, что подобные выставки интересны и полезны, и о многом рассказывают, о жизни и деятельности  о членах организации, их членов семей и родственников.`,
      img: [
        mar02_1,
        mar02_2,
        mar02_3,
        mar02_4,
        mar02_5,
        mar02_6,
        mar02_7,
        mar02_8,
        mar02_9,
      ],
    },
    {
      id: 6,
      url: slider7,
      date: "02.03.2024.",
      text: `02 марта 2024г. в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им. А.С.Пушкина состоялся праздник посвящённый Женскому Дню 8 марта.
      Программа праздника включала Конкурс семейных пар и концерт участников художественной самодеятельности.
      Две супружеские пары Головины Г.П. и Л.Н. и Игольниковы Е.И. и В.В. показали подготовленные для конкурса 5 заданий, коротко рассказали о своих занятиях, о дне знакомства, о самом важном и запомнившемся событии в их жизни и представили номер худ.самодеятельности. Супруги Головины сценку «Птичий рынок», а супруги Игольниковы стихотворение «Я не могу без тебя». Для 3й супружеской пары Юшковых И.А. и В.В. была подготовлена специальная тест-викторина. Мероприятие всем участникам очень понравилось, отзывы о нем звучали: «Очень хорошо!,» «Здорово!», «Отлично!».`,
      img: [
        mar022_1,
        mar022_2,
        mar022_3,
        mar022_4,
        mar022_5,
        mar022_6,
        mar022_7,
        mar022_8,
        mar022_9,
      ],
    },
    {
      id: 7,
      url: slider8,
      date: "05.03.2024",
      text: `05 марта 2024г. состоялась запись радиопередачи на рвдиоканале "Другое радио" в рамках конкурса "Бережливое сознание" по проекту "Помним, познаем, храним и передаем другим".
      В записи передачи приняли участие руководитель проекта Михайлова, В.И., председатель ТРОО "Общество доступная среда"Игнатова Ю.А. и участники реализации проекта Иванова Е.М., Лубеникова И.В., Былина О.А., Савченко С.Н.
      Участники радиопередачи рассказали в каких мероприятиях они приняли участие, что интересного для себя узнали, где побывали, как проявили свои творческие способности и какие знания они уже передали и передадут другим людям-членам Организации-инвалидам по зрению и членам своей семьи.`,
      img: [mar05_1, mar05_2, mar05_3, mar05_4, mar05_5, mar05_6],
    },
    {
      id: 8,
      url: slider9,
      date: "25.03.2024",
      text: `25 марта в  рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" состоялась экскурсия "Томск Альма-Матер".
      Экскурсию провел "общественный экскурсовод" Алексей Николаевич Минаев.
      Она началась от главных ворот в главную аллею Университетской Рощи.
      Экскурсовод познакомил участников экскурсии с историей возникновения решения о строительстве университета в Томске до его реализации, о политических и экономических проблемах в Российской Империи, помешавших осуществлению строительства в начале 19 в.
      Открытие в Томске Императорского унивеситета в 1888г. имело огромное значение для развития высшего образования на огромной зауральской территории Империи, для развития научно-технического потенциала Сибири и Дальнего Востока, привлечения в Сибирь научной интеллегенции, инженерно-технического персонала. Кроме того, в Томске в Императорский университет для обучения поступали молодые люди из Европейской части России, неся с собой свободолюбивые веяния.А со временем Томский университет стал Альма-матерью и для передовых молодых людей из Казахстана и Средней Азии.
      Экскурсовод провел экскурсантов по территории Рощи и показал главный корпус университета и другие корпуса, которые были построены в конце 19-го, в начале 20-го и в конце 20-го в.в. А.Н.Минаев сообщил для каких Томских университетов ТГУ стал основой-Томский политехнический университет(в1896г.был открыт как Технологический институт Томского университета), Сибирский государственный мед.университет при открытии Томского Императорского университета являлся медицинским  факультетом.В конце 19-го и начале 20-го в.в. около Томского Императорского унивеситета возник своеобразный Студенческий городок с учебными корпусами, мед.клиниками, ботаническим садом, студенческими общежитиями и жилыми домами для профессорского и преподавательского состава.Экскурсанты узнали о выдающихся выпускниках унивеситета, его ученых, факультетах на которых обучается тысячи студентов Сибири, Двльнего Востока, из Европейской части России, Средней Азии, Казахстана.Томский государственный университет и его "собратья" стали основой Томска как науко-образовательного города-"Науко-града".`,
      img: [
        mar25_1,
        mar25_2,
        mar25_3,
        mar25_4,
        mar25_5,
        mar25_6,
        mar25_7,
        mar25_8,
        mar25_9,
      ],
    },
    {
      id: 9,
      url: slider10,
      date: "30.03.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 30 марта для инвалидов по зрению МО ВОС с.Кривошеино состоялась экскурсия «Томск – Губернский и Областной центр». Руководитель проекта Михайлова В.И. и активные его участники Иванова Е.М., Булыгина И.Н., Савченко С.Н. провели экскурсию для членов МО ВОС 6 человек (Шаповалов Н.В., Шаповалова Н.В., Жукова Н.Н., Шаповалов М., Козьякова Д., Куцман Е.) с. Кривошеино: по центральному району г.Томска, где сохранилось много зданий построенных ещё в конце 19-го и начале 20-го века. Экскурсия началась от Отдела библиотечного обслуживания людей с ограничениями жизнедеятельности. Руководитель проекта Михайлова В.И. рассказала о здании, в котором располагается Отдел, его архитекторе, владельцах в начале 20-го века, об учреждениях, находившихся в нём в Советский период. Затем участники экскурсии прошлись по проспекту Ленина, знакомясь со зданиями, в которых находятся различные торговые предприятия и муниципальные учреждения, в т.ч. на углу пер. Нахановича (бывший Ямской пер.) и пр. Ленина (бывшая Почтамская) дом Гадалова, построенного по проекту К.К. Лыгина. В этом доме с начала 20-го века до настоящего времени на 1-м этаже находится продовольственный магазин, а на 2-м и 3-м этажах в настоящее время располагаются некоторые отделы Советского р-на г.Томска и Городская Дума. «Общественный экскурсовод» Савченко С.Н. вместе с руководителем проекта рассказали о Центральном базаре г.Томска, его «гостином дворе» и зданиях, построенных в начале 20-го века, в которых совершались торговые сделки, заключались договора о поставках товаров, встречи купцов и промышленников. Эти здании сохранились и являются украшением центром города. На пл Ленина участники экскурсии посетили Часовню во имя Иверской иконы Божией Матери и прослушали рассказ о её строительстве. Экскурсанты проследовали на Воскресенскую гору по улицам Обруб и Бакунина в музей Истории г.Томска по пути следования руководитель проекта познакомила с историей возникновения этих улиц. Экскурсовод музея провела экскурсию по экспозициям: Томская крепость, Томск – купеческий, крестьянский быт 18-го-19-го в.в. Экскурсовод предоставила возможность инвалидам по зрению потрогать своими руками макет крепостной стены, предметы купеческого, крестьянского быта, одежду того времени и воинские доспехи казаков. После завершения экскурсии гости из с. Кривошеино вернулись в Отдел библиотечного обслуживания и посмотрели представление мини-спектаклей, который представили участники литературного мини-театра. Участники мини-театра в количестве 8 человек показали литературную композицию о жизни и творчестве поэта Николая Клюева и мини-спектакль по рассказам А.П.Чехова «Подарок» и «Радость». Самодеятельные актёры сумели своей игрой и чтением стихотворений Н.Клюева вызвать у зрителей духовно-эмоциональный подъём, который выразился в дружных аплодисментах и словах - «замечательно», «здорово», «хотим еще побывать на подобных представлениях». Председатель МО ВОС с. Кривошеино Шаповалов Н.В выразил глубокую благодарность за оказанный им прием и организацию экскурсий по городу Томску и в музей Истории г.Томска, они узнали много интересного и полезного об истории Томска, его развитии и сохранении исторического и культурного наследия.`,
      img: [
        mar30_1,
        mar30_2,
        mar30_3,
        mar30_4,
        mar30_5,
        mar30_6,
        mar30_7,
        mar30_8,
        mar30_9,
      ],
    },
    {
      id: 10,
      url: slider11,
      date: "13.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" с 07 по 11 апреля 2024г. для участников проекта-инвалидов по зрению в кол-ве 10 чел. состоялась поездка в г.Новокузнецк с целью знакомства с историей освоения Юга Западной Сибири томскими казаками и служивыми людьми, с историей развития духовной жизни, боевым и трудовым подвигом строителей и трудящихся Кузнецкого металлургического комбинате и Западно-Сибирского металлургического завода. В перввй день пребывания в г.Новокузнецке 07 апреля группа туристов посетила литературно-мемориальный музей Ф.М.Достоевского. Экскурсанты в доме-музее прошлись по постоянно действующей экспозици, которая состоит из 5 залов: "Дорога', 'Кузнецкий пятачок", "Салон госпожи Москалевой", "Треугольник", "Венчание". Экскурсовод рассказала о небольшом сроке пребывании Ф.М.Достоевского в г.Кузнецке в середине19 в. и его венчании в 1857г. в Градо-Кузнецкой Одигитриевской церкви. В конце экскурсии экскурсанты прослушали запись из отрывка спектакля о венчании Ф.М. Достоевского в г.Кузнецке, поставленного актерами Новокузнецкого драматического театра. В завершении экскурсии все ее участники прошлись по придомовой территории и сфотографировались на память. После экскурсии участники поездки совершили прогулку по парку Ю.А.Гагарина, и проспекту Металлургов.`,
      img: [
        apr13_1,
        apr13_2,
        apr13_3,
        apr13_4,
        apr13_5,
        apr13_6,
        apr13_7,
        apr13_8,
        apr13_9,
      ],
    },
    {
      id: 11,
      url: slider12,
      date: "14.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" с 07 по 11 апреля 2024г. для участников проекта-инвалидов по зрению в кол-ве 10 чел. состоялась поездка в г.Новокузнецк. 08 апреля участники поездки посетили музей Боевой и трудовой Славы кузнецких металлургов в годы ВОВ 1941-1945г.г. и музей истории и достижений ЗАПСИБа. Экспозиции музея боевой и трудовой Славы размещаются непосредствено в самом памятнике-мемориальном комплексе. Выполнен он из различного материала: камня, мрамора, гранита в виде полудуги, расположенной на трех пилонах. Сверху напоминает лавровую ветвь, выложенную на площадь Побед перед заводоуправлением комбината, с которого на фронт ушли более 6тыс. кузнецких металлургов, из них более 2 тыс. не вернулись с фронта. На фасаде мемориала изображены цифры,"1941-1942-1943-1944-1945" м/у ними-скульптурные горельефы, отображающие 4 ключевых момента ВОВ. Перед мемориалом установлен Вечный огонь, зажжен он был от мартеновской печи N11 и от Вечного огня на Бульваре Героев. 8 мая 1985г. состоялось торжественное открытие музея, а 9 мая был зажжен Вечный огонь. В музее группу экскурсантов встретила экскурсовод Крашенинникова Ольга Евгеньевна. Она рассказала об истории создании Металлургического комбината в г. Сталинске ныне Новокузнецке в 30-е г.г. 20-го столетия, о его первых руководителях, о первых трудовых подвигах трудящихся Комбината. Затем экскурсовод очень подробно рассказала о работе Комбината в первые годы ВОВ, о переоборудовании его под нужды военной промышленности, о создании металла и изготовлении брони для танков в рекордные сроки (70% Советских танков были изготовлены из брони, выпущенной металлургами Комбината). Экскурсантам были представлены образцы металла, выпускаемого для военной техники и образцы изделий. Экскурсовод подчеркнула, что во время войны 1941-1945г.г. на место ушедших на фронт мужчин, встали женщины и подростки, которые совершали трудовые подвиги выполняя и перевыполняя нормы и планы по выпуску металла, а премии отдавали на приобретение необходимого военного снаряжения, например: было изготовлено 400 автоматов ППШ. Металлургический комбинат зв заслуги в военное время 1941-1945г.г. был награжден 3-мя орденами трудовой и боевой Славы: орденом Ленина(1943г.), орденом Трудового Красноо Знамени (1945г.), орденом Кутузова (1945г.), этим орденом удостаивались за боевые заслуги. Ольга Евгеньевна экскурсантам также рассказала и о женщинах, работницах КМК, ушедших на фронт, о их боевых подвигах и о том, сколько их не вернулось с полей сражения. Участникам экскурсии были представлены собранные фотографии погибших металлургов, установленные на турникетах в виде вращающихся призм. А также были представлены и другие экспозиции, посвященные КМК в послевоенное время до наших дней. На площади Побед установлен на постамент Танк Т 34-85, как память об ушедших на фронт и боевых подвигах кузнецких металлургах.Танк ежегодно принимает участие в Параде 9 Мая. Экскурсанты были очень тронуты и остались под глубоким впечатлением от проведенной экскурсии. После экскурсии все сфотографировались на память у Танка Т34-85 и отправились на экскурсию в музей ЗАПСИБа. В музее ЗАПСИБа участники экскурсии познакомились с историей возникновения завода и выпускаемой им продукцией. Экскурсовод Бубнов Никита Александрович провел экскурсантов по залам музея. В первом зале он подробно остановился у витрин с образцами кокса, угля и др. минералов перерабатываемых на заводе. Далее он познакомил с основными видами выпускаемой сталепрокатной продукцией: швеллеры, арматура, балки, шахтные сваи и т.д. и с основной специализацией завода-производством для строительной отрасли. Затем он провел в зал, посвященный первым строителям ЗАПСИБа, в котором экскурсанты подробно разглядели первое жильё строителей в натуральную величину-палатку вместе с обустроенным внутри бытом тех лет (конец 50-х г.г. 20-го столетия). Еще экскурсанты познаклмились с залом наград ЗАПСИБа, в котором собраны награды от Правительства РФ и др. партнеров различных стран и посетили последнюю тематическую выставку, представленную предметами быта 20 в. Все участники экскурсии вспомнили, что когда то и в их семьях, живя с родителями или у дедушек, бабушек, такие предметы использовались в быту (мебель, посуда, одежда, бытовые приборы, бытовая техника, домашняя утварь и т.д.).`,
      img: [
        apr14_1,
        apr14_2,
        apr14_3,
        apr14_4,
        apr14_5,
        apr14_6,
        apr14_7,
        apr14_8,
        apr14_9,
      ],
    },
    {
      id: 12,
      url: slider13,
      date: "15.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" с 07 по 11 апреля 2024г. для участников проекта-инвалидов по зрению в кол-ве 10 чел. состоялась поездка в г.Новокузнецк. 09 апреля участники поездки посетили Собор Рождества Христова, построенный в память о погибших шахтерах Кемеровской обл. Перед посещением храма экскурсантов удивило его размер и внешняя яркая расцветка фасадов. По храму экскурсию провел Матвей Орлов студент 4-го курса духовной семинарии. Он рассказал об истории строительства храма, о его архитектуре, его внутреннем расположении приделов и убранстве. Экскурсовод особо уделил внимание главному иконостасу, он подробно рассказал кто изображен и в какой последовательности с нижнего до верхнего ряда иконостаса. Затем он провёл группу экскурсантов по приделам, в которых рассказал о их предназначении и какие службы проводятся в них. В правом приделе установлен резервуар со Святой водой, которую все желающие экскурсанты испили. Экскурсантов провели в крестильную комнату храма, которая располагается в цокольном этаже под храмовой частью собора. В нем Матвей Орлов рассказал о святыне собора иконе Св.Варваре и легенду о Варваре.Также он рассказал какие иконы располагаются на стенах Крестильной, и в какой технике они выполнены (мозаики), с какими событиями и проведением каких праздников они связаны. В центре комнаты установлены купели для проведения таинства Крещения. Экскурсанты посетили балконную часть собора, предназначенную для певчих хора, сверху они увидели красоту и величие собора. Матвей Орлов, всех экскурсантов привел в класс звонарей, где проводятся занятия по технике игры в колокола. В классе он продемонстрировал небольшую мелодию колокольного звона.. Самой последней и наивысшей точкой экскурсии в соборе стала колокольня.На нее экскурсанты поднялись по крутой металлической лестнице, в несколько этапов. На самой колокольне, они вблизи могли разглядеть верхнюю часть куполов, а сам экскурсовод исполнил для гостей музыкальный мотив на колоколах.После исполненного колокольного звона, все участники экскурсии остались под глубоким впечатлением, а в конце экскурсии поблагодарили Матвея Орлова за проведенную экскурсию. После экскурсии экскурсанты обошли территорию вокруг храма, увидели и узнали от сопровождающих, где располагается духовная семинария и общежитие для семинаристов.На фоне собора все участники экскурсии сфотографировались на память.`,
      img: [
        apr15_1,
        apr15_2,
        apr15_3,
        apr15_4,
        apr15_5,
        apr15_6,
        apr15_7,
        apr15_8,
        apr15_9,
      ],
    },
    {
      id: 13,
      url: slider14,
      date: "17.04.2024",
      text: `В рамках конкурса "Бережливое сознание " по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" с 07 по 11 апреля 2024г. для участников проекта-инвалидов по зрению в кол-ве 10 чел. состоялась поездка в г.Новокузнецк. 10 апреля группа участников поездки посетила музей-заповедник г.Новокузнецка "Кузнецкая крепость". Чтобы попасть в музей группе пришлось преодолеть крутой подъем до центральных ворот Крепостной стены около 1 км. В музее экскурсовод подробно рассказала сначала историю основания Крепости, как острога в 1618г., о ее первоначальном местоположении, о ее предназначении, о первых строителях. Затем она рассказала, о строительстве Кузнецкой крепости по одной из версий, по указу Павла 1 в 1800-1820 г.г., как часть Сибирской линии для защиты Южной Сибири от китайской угрозы, а по другой по указу Екатерины 2, в 1768г. от набегов джунгарцев, киргиз-кайсаков и др.кочевников. Крепость с момента застройки ни разу не участвовала в военных действиях, и была упразднена как военное сооружение, а с 1870 г. Кузнецкая крепость являлась тюрьмой для уголовных преступников. В 1876г. на основании проездной башни была построена надвратная церковь во имя Иильи Пророка, в 1877г. была заново отстроена Часовня во имя Вознесения. В 1920-х г.г. Кузнецкий тюремный замок был сожжен, а Часовня была разрушена. В Советское время Кузнецкой крепости особо не уделяли внимание, только в 1997г. было принято решение о крупномасштабных реставрационных работах. Здание, в котором проводилась экскурсия для группы экскурсантов, было воссоздано по типу и проекту Солдатской казармы. В помещении Кузнецкой крепости (солдатской казармы) экскурсанты познакомились с экспонатами музея: предметами быта, орудиями труда местного населения (шорцев), найденных во время археологических раскопок, макетом "Кузнецкой крепости", военной формой линейных казаков образца 1812-1825г.г., деталями вооружения конца 18-го начала 19-го в.в.., боевым оружием (пушки, мортиры); с сохранившимися до наших дней предметами Кузнецкого тюремного замка. Группа экскурсантов по своему собственному желанию посетила 2 корпус (солдатской казармы) Кузнецкой крепости, в которой самостоятельно познакомились с предметами археологических раскопок, найденных на территории Кемеровской обл. и с предметами быта местного населения конца 19-го начала 20-го в.в. После экскурсии экскурсанты прошлись по территории Кузнецкой крепости, поднялись на "стену" Крепости и сверху полюбовались панорамой города.`,
      img: [
        apr17_1,
        apr17_2,
        apr17_3,
        apr17_4,
        apr17_5,
        apr17_6,
        apr17_7,
        apr17_8,
        apr17_9,
      ],
    },
    {
      id: 14,
      url: slider15,
      date: "17.04.2024.",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаём другим" с 07 по 11 апреля 2024г. для участников проекта-инвалидов по зрению в кол-ве 10 чел. состоялась поездка в г.Новокузнецк. 11 апреля группа участников поездки посетила Краеведческий музей г.Новокузнецка. Экскурсию по музею провела старший научный сотрудник Гарелик Полина Дмитриевна. Вначале экскурсии она рассказала о первых создателях музейной коллекции, Д.Т.Ярославцеве и Г.С.Блынском, впоследствии основателях краеведческого музея, о дате основания Краеведческого музея (7 ноября 1927г.). Экскурсовод провела гостей по всем отделам музея- краеведения, истории, посвященный местному населению шорцам, основания Кузнецкой крепости, ВОВ 1941-1945г.г., металлургической промышленности, о заводах города, выставке, посвященной Кунецкстрою и подробно рассказала об экспонатах каждого отдела. Во время проведения экскурсии она учла что у людей ограничения по здоровью (инвалидность по зрению), экспонаты находящиеся за стеклом подробно описывала. Экскурсанты прослушали аудиозапись стихотворения В.В.Маяковского "Я знаю город будет, я знаю саду цвесть, когда такие люди в стране Советской есть", посвященное строителям металлургического комбината г.Новокузнецка, а также им был показан небольшой видеоролик о застройке г.Новокузнецка в Советское время: заводах, социокультурных значимых объектах, жилых домов и особенности их архитектуры. Участникам экскурсии очень понравился рассказ экскурсовода, они в конце экскурсии задавали интересующие вопросы и поделились впечатлениями после проведенной экскурсии.`,
      img: [
        apr172_1,
        apr172_2,
        apr172_3,
        apr172_4,
        apr172_5,
        apr172_6,
        apr172_7,
        apr172_8,
        apr172_9,
      ],
    },
    {
      id: 15,
      url: slider16,
      date: "18.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 16 апреля 2024г. состоялась экскурсия «Томская старина» о городе Томске 18-19 в.в. По исторической центральной части города площадь Ново-соборная провела «общественный экскурсовод» Г.П.Гальчук. она познакомила с историей строительства собора во имя святой троицы в конце 19-го века, в память о каком событии он был построен и на какие средства он был построен. Участники экскурсии познакомились также с архитектурой зданий вокруг площади (Дом губернатора, дом губернской Управы, дом управления железной дороги, клиники Томского императорского университета), которые сохранились до наших дней и являются охранными памятниками архитектуры Томска. Участники экскурсии остановились у памятного камня, заложенного в память пребывания патриарха Алексия II и предполагаемого строительства Часовни, на месте разрушенного Свято-Троицкого собора. Экскурсовод по пути следования познакомила с памятниками, установленными на Площади боевому и трудовому подвигу Томичей в годы ВОВ и революционерам, погибшим в годы Гражданской войны 1918-1920г.г. Экскурсию продолжила руководитель проекта Михайлова В.И. на тему пр.Ленина – улица архитектора К.К.Лыгина. Участники экскурсии прошлись по пр.Ленина от пл. Ново-Соборной. Экскурсовод познакомила их со зданиями, построенными во второй половине 19-го и самом начале 20-го столетия по проекту архитектора К.К.Лыгина сохранившихся до наших дней. К этим зданиям относятся: здание мэрии, построенное на средства Компании «Евграф Кухтерин и сыновья», торговый дом Гадалова (в настоящее время находятся различные заведения общепита), дом «Общественных собраний» (бывший дом офицеров), Губернская аптека, здание ЗАГСА. Отдельно экскурсовод рассказала историю строительства здания Томского областного краеведческого музея. Во второй половине 19-го века это здание было построено золотопромышленником И.Д.Асташевым для собственной семьи, впоследствии проданного Томскому архиерею. А также экскурсовод коротко рассказала биографию И.Д.Асташева. Третью часть экскурсии «Томская старина» продолжилась в самом центре пр. Ленина. Её провел «общественный экскурсовод» С.Н.Савченко. Он познакомил экскурсантов с названием этого района города Томска в 18-19 в.в. – Уржаткой и рассказал, как этот район застраивался в течение 18-го и 19-го в.в., какие улицы и переулки и площади относились к этому району. Экскурсовод познакомил с памятниками архитектуры этого района, рассказал, что в них находилось и что находится сейчас в настоящее время. Он подробно рассказал о работе первой Электростанции г.Томска, которая была построена в конце 19-го века. Участники экскурсии выразили благодарность за предоставленную возможность пройтись по историческому центру города и узнать много интересного о названиях улиц, районов и зданиях, которые часто ими посещаются.`,
      img: [
        apr18_1,
        apr18_2,
        apr18_3,
        apr18_4,
        apr18_5,
        apr18_6,
        apr18_7,
        apr18_8,
        apr18_9,
      ],
    },
    {
      id: 16,
      url: slider17,
      date: "22.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 20 апреля 2024г. состоялась последняя экскурсия по программе проекта на родину известного советского писателя Георгия Мокеевича Маркова в с.Ново-Кусково Асиновского района и Краеведческий музей г.Асино Томской области. В поездке приняли участие семь инвалидов по зрению из Томска, а в г.Асино к Томичам присоединилось ещё одна участница экскурсии -инвалид по зрению. В музее г.Асино гости из Томска прослушали Программу музея "Весенняя увертюра" Макаровские историко-краеведческие литературные чтения приуроченные ко Дню рождения писателя, родившегося 19 апреля 1911г. Эти Чтения явились своеобразной экскурсией по творчеству Г.М.Маркова и его биографии. Экскурсанты узнали о семье писателя, о его открытости и простоте в общении с читателями, о его неиссякаемой трудоспособности и стремлении к достижению совершенства в творчестве. После чтения научный сотрудник отдела музея Сергей Иванович Толстов провёл экскурсию по музею. Он подробно остановился на появлении первого русского поселения на Асиновской земле, как казачьего зимовья для принятия Ясака с коренного поселения ПриЧулымья, в последствии названного с.Дорохово. Экскурсовод рассказал об отношениях русских людей с коренным поселением, жившим по притокам и берегам Чулыма, о переселенческой политики царского правительства в Сибири и заселении крестьянами территории настоящего Асиновского района. После экскурсии по музею Томичи посетили с.Ново-Кусково, в котором родился писатель, где вырос и сделал первые шаги в литературном творчестве в качестве сельского корреспондента. К сожалению, здание библиотеки выстроенной на средства писателя и где располагался музей Г.М.Маркова, три года назад сгорело. Но фонд музея удалось спасти от огня и разместить в краеведческом музее города Асино. Экскурсия на родину писателя познакомила её участников не только с биографией, общественной деятельностью, деятельностью в качестве руководителя писательской организации страны, творчеством Г.М.Маркова, но и позволило через его переписку с женой, родными и писателями-современниками воссоздать его человеческий, открытый, простой, любящий свой край образ писателя, не забывавшего о своих корнях. Следует выразить особую признательность участникам экскурсии за их отзывчивость и доброжелательное настроение во время поездки, которая длилась целый день.`,
      img: [
        apr22_1,
        apr22_2,
        apr22_3,
        apr22_4,
        apr22_5,
        apr22_6,
        apr22_7,
        apr22_8,
        apr22_9,
      ],
    },
    {
      id: 17,
      url: slider18,
      date: "28.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаём другим" 26 апреля 2024г. для участников проекта - инвалидов по зрению в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им.А.С. Пушкина состоялось Тематическая программа «Томск в стихах и песнях», посвящённая 420-летию г.Томска, 220-летию Томской губернии и заключительное мероприятие игра-викторина «Проулка по Томску» и представление коротких рассказов о любимом месте в г.Томске. Тематическую программу представил «Литературный мини-театр», в ней прозвучали стихи томских поэтов и песни томских композиторов и членов Организации. Зрители прослушав программу познакомились с поэтическим восприятием г.Томска, его уникальностью и значением в жизни каждого томича и других людей, которые побывали в старинном сибирском городе. После Тематической программы Литературный мини-театр представил мини-спектакль по творчеству писателя В.Я.Шишкова, который 20 лет прожил в г.Томске, по его рассказу «Редакторша». Затем 3 участника реализации проекта рассказали о своем любимом месте в г.Томске. В заключении была проведена игра-викторина по мероприятиям проекта. Викторина показала, что проект имел познавательное значение для его участников, познакомил с историческими и культурными достопримечательностями родного города и Сибири, о которых они ранее не имели представления. Самые активные участники реализации проекта – 9 человек были отмечены Дипломами от ТРОО «Общество доступная среда». Участники проекта выразили благодарность за проведение проекта, за вовлечение их в этот проект, и высказали пожелание, чтобы и в дальнейшем работал Литературный мини-театр, и организовывались мероприятия по знакомству с историко-культурным и духовном наследием страны.`,
      img: [
        apr28_1,
        apr28_2,
        apr28_3,
        apr28_4,
        apr28_5,
        apr28_6,
        apr28_7,
        apr28_8,
        apr28_9,
      ],
    },
    {
      id: 18,
      url: slider19,
      date: "10.05.2024",
      text: `В Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им. А. С. Пушкина при поддержке благотворительного фонда "Дом слепоглухих" г.Москва д.Пучково 10.05.2024г.состоялось очередное занятие кружка "Мастерская по вязанию без крючка и спиц". На нем присутствовало 5 человек,кроме вязания участницы кружка начали изучение жестового языка,чтобы общаться с инвалидом по зрению тотально глухой.Это изучение началось по просьбе участниц кружка.В этот же день состоялось занятие по овладению телефоном смартфоном с Гусевой Ф.Н.Занятие провёл Сысак Евгений.Все желающие инвалиды по зрению,кто приобрёл смартфоны,могут пройти курс обучения по полному овладению смартфоном у Сысака Евгения. Обращаться к руководителю досугового Центра Михайловой В.И.`,
      img: [may10_1, may10_2, may10_3, may10_4, may10_5, may10_6, may10_7],
    },
    {
      id: 19,
      url: slider20,
      date: "10.05.2024.",
      text: `10 мая 2024г. состоялось посещение Мемориала Боевой Славы томичей в годы Великой Отечественной войны в Лагерном саду.Экскурсию посетили 8 инвалидов по зрению с нарушением слуха, Михайлова В.И. рассказала историю мемориала,напомнила сколько жителей Томска и Томской области воевало на фронтах Великой Отечественной войны,сколько их погибло,скольким воинам Томичам присвоено звание Героя Советского союза,как в Томске увековечена память о героях томичах и томских дивизиях.Экскурсанты положили к "Вечному огню' цветы,прошлись по аллее Славы,нашли среди списков погибших воинов своих родственников.Великая Отечественная война не обошла своей бедой не одну сторону, в своём стихотворение Иван Краснов написал так: "В Сибири не было войны,но не найти такой сторонки,куда с известием беды не заглянула похоронка".И это действительно так.У каждого участника экскурсии на фронтах Великой Отечественной войны воевали и погибли представители их старшего поколения.И это посещение-экскурсия явилась данью памяти их подвигу.`,
      img: [
        may102_1,
        may102_2,
        may102_3,
        may102_4,
        may102_5,
        may102_6,
        may102_7,
        may102_8,
        may102_9,
        may102_10,
      ],
    },
    {
      id: 20,
      url: slider21,
      date: "28.05.2024",
      text: `28 мая 2024г. состоялась экскурсия в музей Дом Радио на средства благотворительного фонда Дома слепоглухих г.Москва д.Пучково и самих участников экскурсии. В экскурсии приняли участие 11 инвалидов по зрению, из них 6 чел. с нарушением слуха с социальным сопровождением и сурдопереводчиком. Экскурсию провела ведущая радио программ Татьяна Владимировна Негодина.
      В течение экскурсии экскурсанты познакомились с историей развития Томского областного радио, с различной принимающей и передающей радиоаппаратурой. Инвалидам по зрению были представлены радио репродукторы, начиная с «черной тарелки» заканчивая последними образцами. Некоторые образцы радио репродукторов, изготовляясь на Томском заводе измерительной радиоаппаратуры, называвшиеся тогда «Север». Участники экскурсии прослушали сообщение о начале Великой Отечественной войны диктором
      Ю. Левитаном, которое 22 июня 1941г. граждане СССР услышали из «черной тарелки». Участники экскурсии познакомились с ламповыми радиоприёмниками, радиолой, катушечными магнитофонами и несколькими видами микрофонов, которые использовались при подготовках и трансляциях радио программ.
      В зале Звукозаписи участники экскурсии послушали, как звучит рояль, на котором экскурсовод исполнила музыкальную пьесу и песню «В землянке». В заключении экскурсии экскурсанты участвовали в фото сессию. Желающие из них сфотографировались на фоне экспозиции музея, баннера с логотипами «Россия Томск, Телевидение и радио» и с наушниками в которых работал популярный радио ведущий Андрей Мурашов. Экскурсию ведущая провела с учетом особенности инвалидности экскурсантов. Она для слабо слышащих произносила текст чётко, громко и не быстро, чтобы сурдопереводчик успевала переводить речь, и каждый участник экскурсии своими руками смог потрогать представленные экспонаты. Экскурсия всем её участникам понравилась, и они выразили ведущей радиопрограмм и экскурсоводу Татьяне Владимировне Негодиной благодарность.`,
      img: [
        may28_1,
        may28_2,
        may28_3,
        may28_4,
        may28_5,
        may28_6,
        may28_7,
        may28_8,
        may28_9,
        may28_10,
      ],
    },
    {
      id: 21,
      url: slider22,
      date: "30.05.2024",
      text: `30 мая 2024г. в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им.А.С. Пушкина состоялась творческая развлекательная программа «Покажи себя и послушай других», посвященная проводам весны и встрече лета. Программа включала выступление её участников с художественными номерами, участие в играх и викторине 17 инвалидов по зрению, в т. ч. 8 из них с нарушением слуха и трое сопровождающих провели очень интересную и весёлую встречу.
      Программу открыла В.И.Михайлова проведением русской народной хороводной игрой «А мы просо сеяли», в которой приняли все присутствующие на встрече. Эта игра явилась своеобразной разминкой, после которой началась концертная программа.
      В программе прозвучали стихи в исполнении Галины Гальчук, Елены Костиковой, В.И.Михайловой, Сергея Кононова, басни в исполнении Алексея Минаева. Елена Костикова и Галина Гальчук исполнили зажигательный цыганский танец. Игорь Сёмин под аккомпанемент гитары исполнил песню «Есть только миг», Группа женщин в составе Ирина Булыгина, Елена Игольникова, Елена Костикова и Валентина Михайлова исполнили две песни « Над полями зорька светлая» и русскую народную «Подай балалайку». К исполнению, которой подключились все зрители.
      Ирина Булыгина представила свою творческую работу – короткие видеофильмы парке «Околица» и необычных памятниках г.Томска, которые она представляла на творческие конкурсы.
      После концертной программы состоялась игра-викторина «Путешествие на поезде по г.Томску». Вопросы викторины посвящались истории г.Томска и его памятникам.
      В заключении творческой программы был проведен обряд «Посвящение в туристы ТРОО «Общество доступная среда»». Этот обряд прошла Елена Игольникова. как самая активная ответственная и выносливая туристка туристических проектов в организации. Она произнесла Клятву туриста, в которой дала обещания следовать всем правилам, указанным в этой Клятве.
      В конце программы состоялось чаепитие. Во время чаепития участники мероприятия обменялись мнениями и пожеланиями о мероприятиях на летний период и согласились с планом проведения экскурсий на июнь и июль. Чаепитие организовано на средства Организации и средства благотворительного фонда «Дома слепоглухих»д.Пучково г.Москва .`,
      img: [
        may30_1,
        may30_2,
        may30_3,
        may30_4,
        may30_5,
        may30_6,
        may30_7,
        may30_8,
        may30_9,
      ],
    },
    {
      id: 22,
      url: slider23,
      date: "14.06.2024",
      text: `14 июня 2024г. участники художественной самодеятельности ТРОО «Общество доступная среда» представили Тематическую программу «А семья-это всё!» и поэтическую зарисовку о Томске для членов ВОС инвалидов по зрению и их семей местной организации ВОС с. Кривошеино. Представление программы состоялось на открытой веранде музея Казачьей культуры и быта «Братина». Гости из г.Томска и Кривошеицны расположились за большим общим столом накрытым для чаепития и провели дружно в теплой доброжелательной обстановке программу, посвященную году Семьи и юбилейным датам городу Томску и Томской области 420-летию образования г.Томска, 220-летию образования Томской губернии, 80-летию Томской области.
      Три семьи Шаповаловы с сыном и мамой, Козловы муж и жена и Куцман бабушка с внуком, рассказали об образовании своих семей, об интересных событиях в их жизни, об общих занятиях и увлечениях. Томичи для каждой семьи исполнили посвященные им стихи и песни. На программе присутствовали давние друзья ТРОО «Общество доступная среда» Смыслова Светлана Владимировна и Штыкин Петр Петрович. Они неоднократно встречали незрячих людей Организации в музее и проводили для них великолепные, адаптированные экскурсии. И 14 июня они, как «творческая казачья семья» рассказали о своей совместной работе и исполнили старинную казачью песню «Когда мы были на войне».
      Слушая стихи о Томске, участники программы совершили своеобразную виртуальную экскурсию по Томску. Короткие видеоролики Булыгиной Ириной показали Парка «Околица», где ежегодно проводятся Праздника «топора», и «Необычные памятники Томска». Встреча в Кривошеино завершилась совместной общей фотографией. Кривошеинцы горячо поблагодарили томичей за Праздник и пригласили к себе на проведение совместного туристического похода на озеро в д.Исламбуль и на празднование 100-летнего юбилея Кривошеинского р-на.
      Поездка в с. Кривошеино организована на средства благотворительного фонда "Дома слепоглухих" д.Пучково г.Москва, руководителя транспортной компании ООО «Автодоставка» Лапицкого Андрея Викторовича и ИП Павлецов.`,
      img: [
        jun14_1,
        jun14_2,
        jun14_3,
        jun14_4,
        jun14_5,
        jun14_6,
        jun14_7,
        jun14_8,
        jun14_9,
        jun14_10,
      ],
    },
    {
      id: 23,
      url: slider24,
      date: "15.06.2024",
      text: `15 июня 2024г. в г.Колпашево в помещении местной организации ВОС с программой «А семья-это всё!» перед членами ВОС, проживающими в г.Колпашево и пос.Тогур выступили участники художественной самодеятельности ТРОО «Общество доступная среда». В течении программы 4 семьи рассказали историю знакомства супругов, о своей профессиональной деятельности, об увлечениях, о некоторых незабываемых событиях в семейной жизни, о своих детях и внуках у кого они есть. Некоторые члены семей показали свои творческие способности. А.Н.Сопыряев очень эмоционально прочёл стихотворение В.Тушновой «Не отрекаются любя». С.В.Климентьева прочитала стихотворение о семье, А.А.Абрамова под аккомпанемент гармони, на которой играл её муж А.С. Абрамов, очень задушевно исполнила песню «Скажи береза белая». Всех томичей и даже колпашевцев удивила своим рассказом о выращивании цветов О.Я.Балобанова. Во всех представленных семьях один из супругов – инвалид по зрению с нарушением слуха. А.С.Абрамов, О.Я. Балобанова, С.В.Климентьева, Н.Г.Сопыряева. Томичи исполнили для семей и др. участников праздника стихи и песни, поэтическую миниатюру, балладу о любви «Я не могу без тебя». На празднике семьи был представлен юбиляр, инвалид по зрению с нарушением слуха А.Ф. Ковалёв. Ему исполнилось 90 лет. Семейным парам и юбиляру были вручены небольшие подарки.
      Участники программы г.Колпашево и пос. Тогур выразили благодарность за организацию праздникам семьи и приглашали почаще приезжать к ним в гости. Поездка в г.Колпашево была организована на средства благотворительного фонда Дома слепоглухих д.Пучково г.Москва, руководителя транспортной компании ООО «Автодоставка» Лапицкого Андрея Викторовича и ИП Павлецов.`,
      img: [
        jun15_1,
        jun15_2,
        jun15_3,
        jun15_4,
        jun15_5,
        jun15_6,
        jun15_7,
        jun15_8,
        jun15_9,
        jun15_10,
      ],
    },
    {
      id: 24,
      url: slider25,
      date: "23.06.2024",
      text: `23 июня члены ТРОО "Общество доступная среда" и Досугового центра поддержки слепоглухих инвалиды по зрению в т.ч. с нарушением слуха посетили храм во имя Святителя Николая Угодника в с.Семилужки Томского р-на. В храме гостей встретил иерей о.Евгений, он рассказал о возникновении, значении праздника Святой Троицы и традициях празднования у православных людей.
      Также о.Евгений Коноплев провел беседу с гостями о том, что 2024г. объявлен годом семьи, о значении семьи как для общества, так и в целом для всей страны, что особенно в наше время необходимо проявлять заботу своим близким и родным людям, а также, что семьей может называться любое общество, коллектив, объединение людей по интересам и т.д. Он рассказал о церковном обряде таинстве венчании, об обязательном, или необязательном совершении этого обряда м/у супругами.
      Гости вимательно слушали и задавали интересующие вопросы. В конце встречи по традиции желающие поставили свечи за упокой и здравие и поблагодарили о.Евгения за прием и интересный рассказ.
      После посещения храма все участники поездки отправились к озеру, там они устроили пикник на природе.
      После отдыха на природе участники поездки решили по пути домой заехать в село Корнилово и посетить храм во имя Святых благоверных русских Князей страстотерпцев Бориса и Глеба. В храме они встретили протоирея о.Николая Абрамова. После непродолжительной беседы о.Николай предложил гостям и давним своим знакомым остаться на Молебен, посвященный погибшим воинам участвовавшиих в СВО.
      Гости прослушали службу, посвященную празднованию Св.Троице, в которой прозвучали песнопения и пояснения о значении этого праздника для верующих, о традициях его повзднования. Настоятели обоих храмов всегда очень внимательно и доброжелательно относятся к инвалидам по зрению Организации и Досугового центра, поэтому они с удовольствием их посещают.`,
      img: [
        jun23_1,
        jun23_2,
        jun23_3,
        jun23_4,
        jun23_5,
        jun23_6,
        jun23_7,
        jun23_8,
        jun23_9,
      ],
    },
    {
      id: 25,
      url: slider26,
      date: "28.06.2024",
      text: `28 июня 2024г. группа активных туристов людей с ограниченными возможностями (инвалиды по зрению в т.ч. с нарушением слуха) ТРОО "Общество доступная среда" посетили музейный комплекс северного садоводства с.Бакчар и питомник ОГУП "Бакчарское".
      В с.Бакчар группу экскурсантов встретила сотрудник музея Кузнецова Оксана Ивановна.
      Она провела гостей в корпус музея "Барак ссыльных". Для гостей в "бараке" был представлен мини-спектакль "Судьба поневоле" по воспоминаниям из писем ссыльных в Бакчарский р-н. Спектакль показали трое женщин -сотрудницы музея, они проникновенно рассказали о буднях первых ссыльных на Бакчарской земле.Внешний образ ссыльных "актрисы" постарались передать через одежду и эмоции.
      Затем гостей проводили в главное здание Бакчарского краеведческого музея северного садоводства "Северный сад". Там для них экскурсию провела Кузнецова Оксана Ивановна. Во время экскурсии было рассказано о местном коренном населении Бакчарского р-на проживающем в 19 в., о первых переселенцах "Столыпинской реформы", о заселении территории политическими ссыльными в 30-40-х г.г.
      Оксана Ивановна рассказала о первом главном агрономе Галкинского плодово-овощного хозяйства (ныне опорный пункт северного садоводства) Василие Ивановиче Гвоздеве, о истории возникновении и развитии с.Бакчар. Далее экскурсанты проследовали в другое здание музейного комплекса где ознакомились с экспонатами бытового назначения. Экскурсия всем понравилась, участники поездки узнали много нового о садоводстве в Сибирском регионе и о колоссальном труде сотрудников питомника.
      Далее все вместе доехали до кафе в селе, где радушно встретили хозяева и угостили вкусным обедом со сладостями.
      После вкусного обеда всей группой приехали в сам Бакчарский питомник, где встретила главный агроном питомника Дурандина Галина Александровна. Хоть времени было мало, Галина Александровна всем подробно и с интересом рассказала и показала как выращивается ягода Жимолость в питомнике, все попробовали ягоду с кустов всех сортов. Время пролетело незаметно, все участники набрались положительных эмоций и новых знаний.
      По дороге обратно домой экскурсанты совершили остановку в с .Победа на берегу реки Обь и полюбовались великолепным видом Сибирской реки.
      Туристическая поездка в с.Бакчар -транспортные расходы были организованы на средства участников поездки, за счёт средств Благотворительного фонда 'Дома слепоглухих" д.Пучково г.Москва и ИП Павлецов М.Ю, проведение экскурсии по Краеведческому музею, в питомник с.Бакчар и питание в кафе за счет средств Музея с.Бакчар.`,
      img: [
        jun28_1,
        jun28_2,
        jun28_3,
        jun28_4,
        jun28_5,
        jun28_6,
        jun28_7,
        jun28_8,
        jun28_9,
        jun28_10,
      ],
    },
    {
      id: 26,
      url: slider27,
      date: "30.06.2024",
      text: `В течение июня месяца в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им.А.С.Пушкина при финансовой поддержки благотворительного фонда "Дом слепоглухих" г.Москва д.Пучково для инвалидов по зрению с нарушением слуха проводились занятия мастерской по вязанию "Без крючка и спиц".Во время занятий вновь прибывшие обучались основам плетения по темам: Лицевая гладь и изнаночные петли, плетение косички, остальные продолжали осваивать технику вязания "Плетенки" и выполнять "Косы с дорожкой". Тот кто уже прошел обучение этих приемов вязания, начали обучаться новой технике вязания - плетение шапки с отворотом.
      Руководитель Досугового центра поддержки слепоглухих "Сильные духом" В.И.Михайлова.`,
      img: [
        jun30_1,
        jun30_2,
        jun30_3,
        jun30_4,
        jun30_5,
        jun30_6,
        jun30_7,
        jun30_8,
        jun30_9,
        jun30_10,
      ],
    },
    {
      id: 27,
      url: slider28,
      date: "08.07.2024",
      text: `08 июля в помещении Отдела библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им.А.С.Пушкина состоялась Тематическая программа "А семья-это всё!", посвященная году Семьи и Дню Памяти Св. князя Петра и княгине Февронии -
символу любви, верности по православной вере. В тематической программе приняли участие члены организации "Общество доступная среда" и супружеские пары в которых один из супругов инвалид по зрению с нарушением слуха. Руководитель Досугового центра поддержки слепо-глухих "Сильные духом" Михайлова В.И. открыла программу стихотворением Яворской "А семья-это все!" Затем она представила всех присутствующих на программе, она коротко рассказала историю каждой супружеской пары и семьи остальных участников мероприятия. Супружеские пары, рассказали о том, как они познакомились, о своих членах семьи, о трудностях и радостях, которые они пережили вместе. Особенно удивили супруги Гомаз З.Х. и А.В. Они прожили вместе более 30 лет, воспитали 2-х сыновей. В настоящее время, несмотря, на то, что проживают в г.Северске, они принимают активное участие в мероприятиях Досугового центра и Организации. Надежда Куликова исполнила для участников программы песню "Сердце материнское", а Елена Костикова прочитала стихотворение Е.Назаровой "Мой дом-надежнейшая крепость". В.И.Михайлова рассказала участникам программы легенду о Муромских князьях Петре и Февронии, в память которых в Томске установлен памятник у Богоявленского Собора.
Представители 3-х супружеских пар выразили глубокую благодарность за проведение этой программы. Участница программы Е.Иванова высказала своё впечатление о программе и организации:- Мне было очень приятно участвовать в этой программе и услышать о себе добрые слова, Придя в эту организацию, я почувствовала себя членом большой, дружной и доброй семьи. В заключении программы В.И.Михайлова прочитала стихотворение "Признание в любви" Ю.Левитанского.`,
      img: [jul08_1, jul08_2, jul08_3, jul08_4, jul08_5, jul08_6, jul08_7],
    },
    {
      id: 28,
      url: slider29,
      date: "19.07.2024",
      text: `19.07.2024г. состоялась экскурсия в г.Северск, город-спутник Томска.
В экскурсии приняли участие инвалиды по зрению, в т.ч. с нарушением слуха из Томска и Северска. В программу экскурсии входило: автобусная экскурсия по Северску, во время которой экскурсанты познакомились с историй образования и строительства города, с его достопримечательностями, посещение выставки музея города Северска. Экскурсию по г. Северску провела директор музея Светлана Владимировна Березовская. Она подробно, с любовью к своему городу рассказала о начале строительства города, о его достопримечательностях, памятниках, учреждениях культуры, о Северчанах, которые оставили свой памятный след в истории города. Участники экскурсии проехали по улицам города, его площадям, во время которой услышали, а кто смог увидел дома с архитектурой Советского времени «Сталинки», памятники: создателям атомной промышленности, на площади Ленина - памятник В.И.Ленину, Первостроителям; фонтаны, красиво оформленные клумбы города-спутника и т.д. В музее для участников экскурсии был устроен обед и чаепитие, организованный на благотворительные средства ресторана «Шанте». После обеда в течение полутора часов они знакомились с выставкой "Можно трогать всё руками". Люди среднего и старшего возраста, окунулись в обстановку прожитых ими лет, с огромным интересом осматривали и ощущали своими руками вещи, предметы быта, электробытовую технику, мебель, которыми пользовались граждане Советского Союза. Эта выставка показала, как росло благополучие Советских граждан в послевоенное время. Так же экскурсанты посетили историко-краеведческие экспозиции «По реке времени» и «Северск.70 лет истории». Экскурсовод в лице директора - Березовская С.В. познакомила экскурсантов с 3D копиями старинных археологических артефактов, найденные на территории современного г. Северска. На выставке были представлены альбомы-путеводители по экспозициям, выполненные рельефно-точечным шрифтом. Присутствующие из экскурсантов, кто владеет «Брайлем» смогли прочитать текст. Участники экскурсии выразили огромную благодарность директору музея и её сотрудникам за организацию и возможность посещения музея и проведения специально адаптированной для них экскурсии! На обратном пути из музея в г. Томск участники экскурсии попросили директора музея провести и организовать экскурсию в г. Северск еще, т.к. из-за ограничения по времени экскурсантам не удалось побывать на остальных выставках музея и посетить достопримечательности города.`,
      img: [
        jul19_1,
        jul19_2,
        jul19_3,
        jul19_4,
        jul19_5,
        jul19_6,
        jul19_7,
        jul19_8,
        jul19_9,
        jul19_10,
      ],
    },
    {
      id: 29,
      url: slider30,
      date: "02.08.2024",
      text: `В течение июля месяца в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им.А.С.Пушкина при финансовой поддержки благотворительного фонда "Дом слепоглухих" г.Москва д.Пучково для инвалидов по зрению с нарушением слуха проводились занятия мастерской по вязанию "Без крючка и спиц. Участники "Мастерской" посетили 8 занятий. На занятиях одни из них продолжали оттачивать своё мастерство, а другие осваивать технику вязания. Такие участницы, как Головач Н.Е., Зюзикова Н.С., Булыгина И.Н. смогли уже освоить вязание шапочки и декоративной наволочки. У каждой участницы «Мастерской» свои достижения, которые соответствуют времени начала их обучения. А главное, все они доказали, что этот метод вязания вполне доступен для тотально незрячих людей. Он очень полезен, увлекателен и поможет им связать красивые и уютные вещи для себя, своих близких и для подарков.`,
      img: [
        aug02_1,
        aug02_2,
        aug02_3,
        aug02_4,
        aug02_5,
        aug02_6,
        aug02_7,
        aug02_8,
      ],
    },
    {
      id: 30,
      url: slider31,
      date: "29.08.2024",
      text: `29 августа 2024г. для инвалидов по зрению с нарушением слуха состоялась поездка в библиотеку имени М.Л. Халфиной с.Моряковский Затон Томского р-на на средства БФ "Дом слепоглухих" г.Москва д.Пучково. Сотрудники библиотеки Лебедева Елена Геннадьевна и Забедянская Ольга Ивановна провели очень интересную и познавательную встречу и видео презентацию о жизни и литературном творчестве Томской писательницы М.Л.Халфиной, произведения которой посвящены семейным отношениям.
Участникам мероприятия были представлены фрагменты кинохроники: с юбилея библиотеки, когда она работала заведующей Моряковской библиотеки, и о встрече писательницы с читателями. Они услышали песни из к/фильма "Мачеха" и "Трудное детство" и любимую русскую народную песню М.Л.Халфиной "Сронила колечко" в исполнении Ольги Воронец.
После видео презентации гостям из Томска была представлена музейная экспозиция с личными документами М.Л.Халфиной.
Сотрудники библиотеки сумели адаптировать содержание мероприятия для инвалидов по зрению с нарушением слуха. Они предоставили им возможность рассмотреть фотографии и другие предметы выставки в доступной близости для людей со слабым зрением. В заключении мероприятия состоялась очень полезная для томичей и сотрудников библиотеки беседа об организации библиотечного обслуживания незрячих людей, проживающих в селе а также для гостей было организовано чаепитие. Участники поездки выразили огромную благодарность сотрудникам библиотеки за гостеприимство и доброжелательное отношение к ним.
После посещения библиотеки участники мероприятия посетили храм в селе во имя Покрова Пресвятой Богородицы.`,
      img: [
        aug29_1,
        aug29_2,
        aug29_3,
        aug29_4,
        aug29_5,
        aug29_6,
        aug29_7,
        aug29_8,
        aug29_9,
        aug29_10,
      ],
    },
    {
      id: 31,
      url: slider32,
      date: "03.09.2024",
      text: `В течение августа месяца в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им.А.С.Пушкина при финансовой поддержки благотворительного фонда "Дом слепоглухих" г.Москва д.Пучково проводились занятия Мастерской "Вязание без крючка и спиц", литературного мини-театра и обучение по овладению телефоном смартфоном и тифлофлешплеером.
На занятиях Мастерской вязания без крючка и спиц 4 человека (Головач Н.Е., Зюзикова Н.С., Булыгина И.Н., Шелудько Н.А.) освоили вязание шапок, сумочки, декоративных наволочек и пледов.
На занятиях литературного мини-театра участники познакомились с репертуаром и получили роли по избранным произведениям.
На занятиях по использованию тифлофлешплеера Юшков В.В. освоил основные функции устройства.
Участник занятий по овладению смартфоном Михайленко Н.Г. делает небольшие, но стабильные успехи по изучению основных функций телефона.`,
      img: [sen03_1, sen03_2, sen03_3, sen03_4, sen03_5],
    },
    {
      id: 32,
      url: slider33,
      date: "12.09.2024",
      text: `12 сентября инвалиды по зрению, в т.ч. с нарушением слуха посетили Центр культуры народов Севера «Ильсат». Руководитель этой общественной организации Григорий Коротких приветствовал гостей на селькупском языке. Он подробно познакомил с культурой, бытом, занятиями коренного народа Томской области, который занимал территорию Приобья от устья Томи до современного Ханты-Мансийска.
Григорий Коротких особенно остановился на занятиях селькупов, которые являются представителями самого многочисленного коренного народа. Гости Центра узнали, что селькупы занимались земледелием, рыболовством, охотой в зависимости от места обитания. Они познакомились с предметами быта, ремесленными изделиями, элементами одежды, обуви, изготовленные из дерева, бересты, камыша. Каждый участник экскурсии подержал в своих руках бусы, браслеты, головной женский убор, бубен, лапти, ковш, туески, люльку и другие предметы.
Экскурсия в Центр культуры народов Севера обогатила знаниями о коренном населении Томской области, обитаемого с древнейших времён до освоения Томской земли русскими переселенцами. Они узнали, что из простого природного материала можно изготовлять и предметы быта, и необычной красоты украшения. Участники экскурсии познакомились с техникой использования для изготовления различных изделий бересты, краснопрутника, рогозы, дерева. Все участники единодушно выразили своё мнение двумя словами: «Экскурсия отличная!»
Они горячо поблагодарили Григория Коротких, за предоставленную возможность познакомится со своеобразной, уникальной культурой аборигенов Томской земли.
Экскурсия проводилась на средства БФ «Дом слепоглухих» г.Москва. д.Пучково и собственные средства участников.`,
      img: [
        sen12_1,
        sen12_2,
        sen12_3,
        sen12_4,
        sen12_5,
        sen12_6,
        sen12_7,
        sen12_8,
        sen12_9,

      ],
    },
  ],
  reducers: {
    reducer: (state) => state,
  },
  addlink: (state, action) => {
    state.current = action.payload;
  },
});

export const { reducer } = newsSliderSlice.actions;

export default newsSliderSlice.reducer;
