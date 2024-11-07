export function Tools() {
    return (
        <div
            style={{
                width: "80px",
                border: "1px solid red",
            }}
        >
            <ol
                style={{
                    listStyle: "none",
                }}
            >
                <li>
                    <button
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Paint
                    </button>
                </li>
                <li>
                    <button>Erase</button>
                </li>
            </ol>
        </div>
    );
}
