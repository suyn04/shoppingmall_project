-- Active: 1733101713787@@127.0.0.1@3306@jomalone_db
CREATE VIEW view_product_info_opt
AS
SELECT product_opt.product_opt_id, product.product_id, product.product_name_kor, product.product_name_eng, product_opt.product_price, product_opt.product_volume, product_opt.product_upSystem, product.product_special, product.product_category_id, product_category.product_category_one, product_category.product_category_two, product_category.product_category_thr, product.product_scent, product.product_group_scent,product_status, product.product_intro, product.product_ingredient,
product.product_top, nt.product_note_name as nt_name ,nt.product_note_intro as nt_intro ,nt.product_note_upSystem as nt_upSystem ,
product.product_heart, nh.product_note_name as nh_name ,nh.product_note_intro as nh_intro ,nh.product_note_upSystem as nh_upSystem ,
product.product_base, nb.product_note_name as nb_name ,nb.product_note_intro as nb_intro ,nb.product_note_upSystem as nb_upSystem , 
product.product_reg_date
from product_opt
left OUTER join product on product_opt.product_id = product.product_id
left OUTER join product_category on product.product_category_id = product_category.product_category_id
left OUTER join product_note nt on product.product_top = nt.product_note_id
left OUTER join product_note nh on product.product_heart = nh.product_note_id
left OUTER join product_note nb on product.product_base = nb.product_note_id



CREATE VIEW view_product_info
AS
SELECT product.product_id, product.product_name_kor, product.product_name_eng, product.product_special, product.product_category_id, product_category.product_category_one, product_category.product_category_two, product_category.product_category_thr, product.product_scent, product.product_group_scent,product_status, product.product_intro, product.product_ingredient,
product.product_top, nt.product_note_name as nt_name ,nt.product_note_intro as nt_intro ,nt.product_note_upSystem as nt_upSystem ,
product.product_heart, nh.product_note_name as nh_name ,nh.product_note_intro as nh_intro ,nh.product_note_upSystem as nh_upSystem ,
product.product_base, nb.product_note_name as nb_name ,nb.product_note_intro as nb_intro ,nb.product_note_upSystem as nb_upSystem , 
product.product_reg_date
from product
left OUTER join product_category on product.product_category_id = product_category.product_category_id
left OUTER join product_note nt on product.product_top = nt.product_note_id
left OUTER join product_note nh on product.product_heart = nh.product_note_id
left OUTER join product_note nb on product.product_base = nb.product_note_id