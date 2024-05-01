const { Prompt } = require('../models')

const getAllPrompts = async (req, res) => {
    try {
        const prompts = await Prompt.findAll();
        res.json(prompts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getPromptById = async (req, res) => {
    try {
        const prompt = await Prompt.findByPk(req.params.id);

        if (!prompt) {
            return res.status(404).json({ message: 'Prompt not found' });
        }

        res.json(prompt);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const createPrompt = async (req, res) => {
    try {
        const prompt = await Prompt.create(req.body);
        return res.status(201).json({ prompt });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });
    }
};

const updatePrompt = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Prompt.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedPrompt = await Prompt.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedPrompt });
        }
        throw new Error('Prompt not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deletePrompt = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Prompt.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Prompt deleted");
        }
        throw new Error("Prompt not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const promptController = {
    getAllPrompts,
    getPromptById,
    createPrompt,
    updatePrompt,
    deletePrompt
}

module.exports = promptController