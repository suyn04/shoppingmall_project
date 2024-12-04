import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AProductRegisterOpt from "./AProductRegisterOpt";

const AProductRegister = () => {
    const [categories, setCategories] = useState([]); // All category data
    const [categoryOneOptions, setCategoryOneOptions] = useState([]); // Unique options for Category 1
    const [categoryTwoOptions, setCategoryTwoOptions] = useState([]); // Filtered options for Category 2
    const [categoryThreeOptions, setCategoryThreeOptions] = useState([]); // Filtered options for Category 3
    const [noteOptions, setNoteOptions] = useState([]); // Filtered options for Category 3

    const [selectedCategoryOne, setSelectedCategoryOne] = useState(""); // Selected value for Category 1
    const [selectedCategoryTwo, setSelectedCategoryTwo] = useState(""); // Selected value for Category 2
    const [selectedCategoryThree, setSelectedCategoryThree] = useState(""); // Selected value for Category 2

    useEffect(() => {
        axios
            .get("http://localhost:5001/product/admin/register")
            .then((res) => {
                setCategories(res.data.categories);
                // console.log(res.data.categories);

                // Extract unique Category 1 options
                const uniqueCategoryOne = [
                    ...new Set(
                        res.data.categories.map(
                            (item) => item.product_category_one
                        )
                    ),
                ];
                const uniqueNote = [
                    ...new Map(
                        res.data.note.map((item) => [
                            item.product_note_id,
                            {
                                id: item.product_note_id,
                                name: item.product_note_name,
                            },
                        ])
                    ).values(),
                ];
                // console.log(categories);

                setCategoryOneOptions(uniqueCategoryOne);
                setNoteOptions(uniqueNote);
            })
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    const handleCategoryOneChange = (e) => {
        const selected = e.target.value;
        setSelectedCategoryOne(selected);

        // Filter Category 2 options based on selected Category 1
        const filteredCategoryTwo = [
            ...new Set(
                categories
                    .filter((item) => item.product_category_one === selected)
                    .map((item) => item.product_category_two)
            ),
        ].filter((item) => item !== null); // Remove null values
        setCategoryTwoOptions(filteredCategoryTwo);
        setSelectedCategoryTwo(""); // Reset Category 2 selection
        setCategoryThreeOptions([]); // Reset Category 3 options
    };

    // Handle changes in Category 2
    const handleCategoryTwoChange = (e) => {
        const selected = e.target.value;
        setSelectedCategoryTwo(selected);

        // Filter Category 3 options based on selected Category 1 and 2
        const filteredCategoryThree = [
            ...new Set(
                categories
                    .filter(
                        (item) =>
                            item.product_category_one === selectedCategoryOne &&
                            item.product_category_two === selected
                    )
                    .map((item) => item.product_category_thr)
            ),
        ].filter((item) => item !== null); // Remove null values
        setCategoryThreeOptions(filteredCategoryThree);
        setSelectedCategoryThree(""); // Reset Category 2 selection
    };

    const submitGo = (me) => {
        me.preventDefault();
        console.log("submitGo 진입");
        const frmData = new FormData(document.myFrm);
        // console.log(frmData);
        const data = Object.fromEntries(frmData);
        console.log(data);

        axios
            .post(`http://localhost:5001/product/admin/register`, data)
            .then((res) => {
                console.log(
                    "제품 등록 완료했습니다. 해당 제품의 옵션을 등록해주세요.",
                    res.data
                );
                alert(
                    "제품 등록 완료했습니다. 해당 제품의 옵션을 등록해주세요."
                );
                navigate(`/admin/product/register/option/${res.data.newId}`);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };

    return (
        <div>
            <form name="myFrm" onSubmit={submitGo}>
                <div>제품 상세 내용</div>
                <table border="1">
                    <tr>
                        <td>제품 국문명</td>
                        <td>
                            <input name="product_name_kor" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>제품 영문명</td>
                        <td>
                            <input name="product_name_eng" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>제품 스페셜</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_category_one">카테고리 1</label>
                        </td>
                        <td>
                            <select
                                name="product_category_one"
                                id="product_category_one"
                                onChange={handleCategoryOneChange}
                            >
                                <option value="">Select</option>
                                {categoryOneOptions.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_category_one">카테고리 2</label>
                        </td>
                        <td>
                            <select
                                name="product_category_two"
                                id="product_category_two"
                                onChange={handleCategoryTwoChange}
                                disabled={!categoryTwoOptions.length}
                            >
                                <option value="">Select</option>
                                {categoryTwoOptions.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_category_thr">카테고리 3</label>
                        </td>
                        <td>
                            <select
                                name="product_category_thr"
                                id="product_category_thr"
                                disabled={!categoryThreeOptions.length}
                            >
                                <option value="">Select</option>
                                {categoryThreeOptions.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_scent">향</label>
                        </td>
                        <td>
                            <select name="product_scent" id="product_scent">
                                <option value="citrus">시트러스</option>
                                <option value="fruity">플로랄</option>
                                <option value="light-floral">
                                    라이트 플로랄
                                </option>
                                <option value="floral">플로랄</option>
                                <option value="woody">우디</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>제품 성분</td>
                        <td>
                            <input type="textarea" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_top">탑노트</label>
                        </td>
                        <td>
                            <select name="product_top" id="product_top">
                                <option value="">Select</option>
                                {noteOptions.map((note) => (
                                    <option key={note.id} value={note.id}>
                                        {note.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_heart">하트노트</label>
                        </td>
                        <td>
                            <select name="product_heart" id="product_heart">
                                <option value="">Select</option>
                                {noteOptions.map((note) => (
                                    <option key={note.id} value={note.id}>
                                        {note.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_base">베이스노트</label>
                        </td>
                        <td>
                            <select name="product_base" id="product_base">
                                <option value="">Select</option>
                                {noteOptions.map((note) => (
                                    <option key={note.id} value={note.id}>
                                        {note.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>제품설명</td>
                        <td>
                            <input name="product_intro" type="text" />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button onClick={submitGo}>
                                제품 옵션 추가 관리
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default AProductRegister;
