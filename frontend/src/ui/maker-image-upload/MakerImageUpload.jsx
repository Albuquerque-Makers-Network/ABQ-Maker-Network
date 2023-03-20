const dispatch = useDispatch()
const profile = useSelector(state => {return state.currentUser ? state.currentUser : null})

const sideEffects = () => {
    dispatch(fetchCurrentUser())
}

React.useEffect(sideEffects, [dispatch])
return(
    <>
        <Container className='p-5'>
            <Row>
                <Col>
                    {profile &&
                        <>
                            <ImageUploadUpdate profile={profile}/>
                        </>
                    }
                </Col>

            </Row>
        </Container>
    </>
)
};