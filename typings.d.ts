interface Message{
    text: string;
    createdAt: admin.firestorm.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}