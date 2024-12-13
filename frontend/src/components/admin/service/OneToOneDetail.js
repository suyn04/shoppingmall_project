import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OneToOneDetail = () => {
    const { id } = useParams(); // URL에서 post_no 가져오기
    const navigate = useNavigate(); // 뒤로가기 구현을 위해 사용
    const [onetoone, setOnetoone] = useState(null); // 1:1 문의 데이터 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    // 서버에서 특정 문의 상세 정보를 가져오는 함수
    const fetchOnetooneDetail = async () => {
        if (!id) {
            console.log("id없음");
            return;
        }
        try {
            const response = await axios.get(
                `http://localhost:5001/onetoone/${id}`
            );
            console.log(response.data);

            setOnetoone(response.data); // 서버에서 받은 데이터를 상태에 저장
        } catch (error) {
            setError("1:1 문의 세부 정보를 가져오는 데 실패했습니다.");
            console.error("Error fetching onetoone detail:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOnetooneDetail(); // 컴포넌트가 처음 렌더링될 때 데이터를 가져옴
    }, [id]);

    const handleBackClick = () => {
        navigate("/admin/onetoone"); // 목록 페이지로 이동
    };

    // onetoone이 null인 경우 처리
    if (!onetoone) {
        return <p>문의 정보를 찾을 수 없습니다.</p>;
    }

    const statusChgGo = () => {
        console.log("statusChgGo 진입");
        console.log(onetoone);
        axios
            .put(`http://localhost:5001/onetoone/${id}`, onetoone)
            .then((res) => {
                console.log("제품 정보 수정 완료했습니다.");

                alert("상태 수정을 완료했습니다.");
                fetchOnetooneDetail();
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };
    const stChange = (bname, me) => {
        // console.log("stChange");
        setOnetoone({ ...onetoone, [bname]: me.value });
        console.log(onetoone);
    };
    const chkSelectModule = (bname, arr) => {
        const ret = [];
        for (let ee of arr) {
            // console.log(ee);
            ret.push(
                chkSelect(ee.value, ee.title, onetoone[bname] == ee.value)
            );
        }
        return ret;
    };
    const chkSelect = (vv, tt, chk = false) => {
        return (
            <option value={vv} selected={chk}>
                {tt}
            </option>
        );
    };

    return (
        <div>
            <h1>1:1 문의 상세 정보</h1>
            <p>
                <strong>작성자 이메일:</strong> {onetoone.email}
            </p>
            <p>
                <strong>제목:</strong> {onetoone.post_title}
            </p>
            <p>
                <strong>문의 내용:</strong> {onetoone.post_detail}
            </p>
            <p>
                <strong>작성일:</strong>{" "}
                {new Date(onetoone.post_date).toLocaleDateString()}
            </p>
            <div>
                <strong>처리 상태:</strong>
                <select
                    name="reply_status"
                    id="reply_status"
                    onChange={(e) => stChange("reply_status", e.target)}
                >
                    {chkSelectModule("reply_status", [
                        {
                            value: "대기",
                            title: "대기",
                        },
                        {
                            value: "답변완료",
                            title: "답변완료",
                        },
                    ])}
                </select>
                <button onClick={statusChgGo}>저장</button>
            </div>
            {/* {onetoone.reply_detail && (
                <>
                    <p>
                        <strong>답변 내용:</strong> {onetoone.reply_detail}
                    </p>
                    <p>
                        <strong>답변일:</strong>{" "}
                        {new Date(onetoone.reply_date).toLocaleDateString()}
                    </p>
                </>
            )} */}
            <button onClick={handleBackClick} style={{ marginTop: "20px" }}>
                뒤로가기
            </button>
        </div>
    );
};

export default OneToOneDetail;
