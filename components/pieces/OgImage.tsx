

export const ogpSize = {
    width: 1200,
    height: 630,
};


export function OgImage(props: { title: string; }) {

    return (
        <div style={{
            backgroundImage: 'linear-gradient(170deg, #C6F6D5 0%, #1C4532 30%, #1C4532 70%, #C6F6D5 100%)',
            display: 'flex',
            padding: 30,
            width: '100%',
            height: '100%',
        }}>
            <div
                style={{
                    backgroundColor: '#1C4532',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    border: '8px solid white',
                    borderRadius: 24,
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: ogpSize.height,
                        height: '100%',
                        flexDirection: 'column',
                        padding: 4,
                    }}
                >
                    <div
                        style={{
                            color: 'white',
                            fontSize: 58,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexGrow: 1,
                            letterSpacing: 3,
                        }}
                    >
                        {props.title}👨🏻‍💻
                    </div>
                    <div style={{
                        display: 'flex',
                        color: '#CBD5E0',
                        width: '100%',
                        fontSize: 34,
                        justifyContent: 'flex-end'
                    }}>
                        📝なつちよ日記
                    </div>
                </div>
            </div>
        </div>
    );
};