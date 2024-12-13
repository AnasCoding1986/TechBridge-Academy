const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const zParseData = studentZvalidationSchema.parse(student);

    const result = await studentServices.createStudentIntoDB(zParseData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};