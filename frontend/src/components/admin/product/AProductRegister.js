import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AProductRegister = () => {
    const [noteOptions, setNoteOptions] = useState([]); // Filtered options for Category 3

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:5001/product/admin/register")
            .then((res) => {
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
                setNoteOptions(uniqueNote);
            })
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

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
                    res.data.newId
                );
                console.log(res.data.newId);

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
                            <select name="product_special" id="product_special">
                                <option value="">Select</option>
                                <option value="Best Seller">Best Seller</option>
                                <option value="New">New </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_category_id">카테고리</label>
                        </td>
                        <td>
                            <select
                                name="product_category_id"
                                id="product_category_id"
                            >
                                <option value="">Select</option>
                                <option value="1">코롱</option>
                                <option value="2">
                                    홈 프레그런스 &gt; 캔들
                                </option>
                                <option value="3">
                                    홈 프레그런스 &gt; 디퓨저
                                </option>
                                <option value="4">
                                    배스 앤 바디 &gt; 배스 앤 샤워 &gt; 바디 앤
                                    핸드 워시
                                </option>
                                <option value="5">
                                    배스 앤 바디 &gt; 배스 앤 샤워 &gt; 샤워 젤
                                    앤 오일
                                </option>
                                <option value="6">
                                    배스 앤 바디 &gt; 배스 앤 샤워 &gt; 배스
                                    오일
                                </option>
                                <option value="7">
                                    배스 앤 바디 &gt; 바디 케어 &gt; 바디크림
                                </option>
                                <option value="8">
                                    배스 앤 바디 &gt; 바디 케어 &gt; 바디 앤
                                    핸드 로션
                                </option>
                                <option value="9">
                                    배스 앤 바디 &gt; 바디 케어 &gt; 핸드크림
                                </option>
                                <option value="10">
                                    배스 앤 바디 &gt; 바디 케어 &gt; 바디 미스트
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="product_scent">향</label>
                        </td>
                        <td>
                            <select name="product_scent" id="product_scent">
                                <option value="">Select</option>
                                <option value="citrus">시트러스</option>
                                <option value="fruity">프루티</option>
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
                            <input name="product_ingredient" type="textarea" />
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
                            <button onClick={submitGo}>저장</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default AProductRegister;
